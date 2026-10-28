import os
import sys
import re
import time
import json
import urllib.request
import urllib.parse
from pathlib import Path
from typing import Optional, Dict, Any, List

ENV_FILE = Path(__file__).parent / ".env"
if ENV_FILE.exists():
    with open(ENV_FILE, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ[k.strip()] = v.strip()

API_BASE = "https://api.agentmail.to/v0"
API_KEY = os.getenv("AGENTMAIL_API_KEY", "am_us_inbox_6ab3f52e30948ed8ed8fd4ff9ef1533054629ce06fde53a070a61e7411ebbf1e")
DEFAULT_INBOX = os.getenv("AGENTMAIL_INBOX_ID", "devlopergauravai@agentmail.to")

class AgentMailClient:
    def __init__(self, api_key: str = API_KEY, inbox_id: str = DEFAULT_INBOX):
        self.api_key = api_key
        self.inbox_id = inbox_id

    def _headers(self) -> Dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

    def list_inboxes(self) -> List[Dict[str, Any]]:
        req = urllib.request.Request(f"{API_BASE}/inboxes", headers=self._headers())
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            return data.get("inboxes", [])

    def list_messages(self, limit: int = 10) -> List[Dict[str, Any]]:
        url = f"{API_BASE}/inboxes/{self.inbox_id}/messages?limit={limit}"
        req = urllib.request.Request(url, headers=self._headers())
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            return data.get("messages", [])

    def get_message(self, message_id: str) -> Dict[str, Any]:
        url = f"{API_BASE}/inboxes/{self.inbox_id}/messages/{urllib.parse.quote(message_id)}"
        req = urllib.request.Request(url, headers=self._headers())
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())

    def send_message(self, to: List[str], subject: str, text: str, html: Optional[str] = None) -> Dict[str, Any]:
        url = f"{API_BASE}/inboxes/{self.inbox_id}/messages"
        payload = {
            "to": to,
            "subject": subject,
            "text": text
        }
        if html:
            payload["html"] = html
        req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers=self._headers())
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())

    def wait_for_new_email(self, timeout_sec: int = 180, interval_sec: int = 4, known_message_ids: Optional[set] = None) -> Optional[Dict[str, Any]]:
        if known_message_ids is None:
            existing = self.list_messages(limit=20)
            known_message_ids = {m.get("message_id") for m in existing}

        print(f"[*] Monitoring inbox '{self.inbox_id}' for incoming messages (timeout: {timeout_sec}s)...")
        start_time = time.time()
        while time.time() - start_time < timeout_sec:
            messages = self.list_messages(limit=10)
            for msg in messages:
                mid = msg.get("message_id")
                if mid and mid not in known_message_ids:
                    print(f"\n[+] Incoming email detected!")
                    print(f"    From: {msg.get('from')}")
                    print(f"    Subject: {msg.get('subject')}")
                    full_msg = self.get_message(mid)
                    return full_msg
            time.sleep(interval_sec)
        print("[-] Timed out waiting for new message.")
        return None

    def extract_auth_info(self, text: str) -> Dict[str, Any]:
        # Extract verification / magic URLs
        urls = re.findall(r'https?://[^\s<>"\'\]]+', text)
        # Filter for likely verification or invite links
        auth_urls = [u for u in urls if any(kw in u.lower() for kw in ['verify', 'confirm', 'invite', 'join', 'token', 'auth', 'magic', 'accept', 'hackathon'])]
        # Extract 4-8 digit OTPs
        otps = re.findall(r'\b(?:\d{4}|\d{6}|\d{8})\b', text)
        return {
            "all_urls": urls,
            "verification_urls": auth_urls,
            "otps": list(dict.fromkeys(otps))
        }

if __name__ == "__main__":
    client = AgentMailClient()
    args = sys.argv[1:]
    if not args or args[0] == "check":
        print(f"=== Inbox: {client.inbox_id} ===")
        msgs = client.list_messages(limit=5)
        print(f"Total retrieved: {len(msgs)}")
        for m in msgs:
            print(f"- [{m.get('timestamp')}] From: {m.get('from')} | Subject: {m.get('subject')}")
    elif args[0] == "wait":
        msg = client.wait_for_new_email(timeout_sec=120)
        if msg:
            text_body = msg.get("text") or msg.get("preview") or ""
            auth = client.extract_auth_info(text_body)
            print("\n=== Extracted Authentication Details ===")
            print("Verification Links:", auth["verification_urls"])
            print("OTPs:", auth["otps"])
    elif args[0] == "send":
        if len(args) < 4:
            print("Usage: python agentmail_client.py send <to> <subject> <body>")
        else:
            res = client.send_message(to=[args[1]], subject=args[2], text=args[3])
            print("Send result:", res)
    else:
        print("Commands: check, wait, send")
