import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence
} from "remotion";

// =========================================================================
// SCENE 1: CINEMATIC HOOK & SUPREME BENCH TITLE (Frames 0 - 300)
// =========================================================================
export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12 } });
  const opacity = interpolate(frame, [0, 20, 260, 300], [0, 1, 1, 0]);
  const subtitleY = interpolate(frame, [15, 45], [40, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#06090e",
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: 60,
        textAlign: "center"
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)"
        }}
      />

      {/* Top Track Pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 20px",
          borderRadius: 24,
          backgroundColor: "rgba(212,175,55,0.1)",
          border: "1px solid rgba(212,175,55,0.3)",
          color: "#d4af37",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          marginBottom: 30,
          transform: `scale(${titleScale})`
        }}
      >
        <span>🏛️ HACKINDIA 2026 • AI FOR LAWYERS</span>
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: 76,
          fontWeight: 900,
          letterSpacing: -1,
          margin: 0,
          background: "linear-gradient(135deg, #ffffff 40%, #d4af37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transform: `scale(${titleScale})`,
          textShadow: "0 10px 40px rgba(0,0,0,0.8)"
        }}
      >
        NYAYACROSS
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 32,
          fontWeight: 600,
          color: "#94a3b8",
          marginTop: 16,
          maxWidth: 1100,
          lineHeight: 1.4,
          transform: `translateY(${subtitleY}px)`
        }}
      >
        AI Trial War Room & Witness Cross-Examination Contradiction Engine
      </p>

      {/* Problem Hook Card */}
      <div
        style={{
          marginTop: 40,
          padding: "24px 36px",
          borderRadius: 16,
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          border: "1px solid rgba(225, 29, 72, 0.4)",
          maxWidth: 960,
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
        }}
      >
        <div style={{ color: "#f43f5e", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
          ⚡ THE CORE TRIAL PROBLEM
        </div>
        <p style={{ fontSize: 22, color: "#cbd5e1", margin: 0, lineHeight: 1.5 }}>
          In Indian criminal trials, cases are won or lost under{" "}
          <strong style={{ color: "#d4af37" }}>Section 145 IEA / Section 148 BSA</strong>.
          Lawyers spend grueling nights manually comparing FIRs, police 161 statements, and autopsy records to catch witness lies.
        </p>
      </div>
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 2: ACTIVE TRIAL WAR ROOM & AUDIO STENOGRAPHER (Frames 300 - 660)
// =========================================================================
export const Scene2WarRoom: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20, 330, 360], [0, 1, 1, 0]);
  const damageScore = Math.min(84, Math.floor(interpolate(frame, [10, 80], [0, 84], { extrapolateRight: "clamp" })));

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070b12",
        opacity,
        display: "flex",
        flexDirection: "column",
        padding: 50,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#f8fafc"
      }}
    >
      {/* Top Bench Navigation Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: 20
        }}
      >
        <div>
          <span style={{ fontSize: 24, fontWeight: 800, color: "#d4af37", letterSpacing: 1 }}>
            NYAYACROSS TRIAL WAR ROOM
          </span>
          <span style={{ marginLeft: 16, padding: "4px 12px", borderRadius: 6, backgroundColor: "rgba(225,29,72,0.2)", color: "#f43f5e", fontSize: 14, fontWeight: 700 }}>
            SEC 145 BSA LIVE
          </span>
        </div>
        <div style={{ color: "#94a3b8", fontSize: 16, fontFamily: "monospace" }}>
          Sessions Court, Greater Mumbai • Case SC/842/2025
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 30, marginTop: 30, flex: 1 }}>
        {/* Left: Case Info & Audio Player */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Case Banner */}
          <div style={{ padding: 28, borderRadius: 16, backgroundColor: "#0f172a", border: "1px solid #1e293b" }}>
            <div style={{ color: "#d4af37", fontSize: 14, fontFamily: "monospace", fontWeight: 700 }}>
              FIR CR No. 184/2024 • Section 103 BNS (Murder) & IPC 302
            </div>
            <h2 style={{ fontSize: 34, fontWeight: 800, margin: "10px 0", color: "#f8fafc" }}>
              State of Maharashtra vs. Vikram Shinde
            </h2>
            <p style={{ fontSize: 16, color: "#94a3b8", margin: 0 }}>
              Lead Eyewitness: <strong>Ramesh Pawar (PW-1)</strong> | Presiding: Hon'ble Judge R.K. Deshmukh
            </p>
          </div>

          {/* 32-Band Animated Courtroom Audio Player */}
          <div style={{ padding: 24, borderRadius: 16, backgroundColor: "#0f172a", border: "1px solid rgba(212,175,55,0.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>🎙️</span>
                <span style={{ fontWeight: 700, fontSize: 18, color: "#d4af37" }}>
                  Official Courtroom Stenographer Recording (142 WPM)
                </span>
              </div>
              <div style={{ fontFamily: "monospace", color: "#10b981", fontSize: 16 }}>
                00:14:22 / 00:48:15 [SYNCED]
              </div>
            </div>

            {/* Simulated 32 Waveform Bars */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, height: 80, padding: "0 10px", backgroundColor: "#020617", borderRadius: 8 }}>
              {Array.from({ length: 32 }).map((_, i) => {
                const height = Math.abs(Math.sin((frame * 0.15) + i * 0.35)) * 60 + 15;
                const isContra = i >= 10 && i <= 18;
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${height}px`,
                      borderRadius: 3,
                      backgroundColor: isContra ? "#f43f5e" : "#d4af37",
                      transition: "height 0.1s ease"
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Damage Score Metric */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              padding: 32,
              borderRadius: 16,
              backgroundColor: "rgba(225,29,72,0.1)",
              border: "2px solid rgba(225,29,72,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              flex: 1
            }}
          >
            <span style={{ fontSize: 20, color: "#f43f5e", fontWeight: 800, letterSpacing: 2 }}>
              PROSECUTION CREDIBILITY DAMAGE
            </span>
            <div style={{ fontSize: 96, fontWeight: 900, color: "#f43f5e", margin: "10px 0", fontFamily: "monospace" }}>
              {damageScore}%
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#fca5a5" }}>
              FATAL IMPEACHMENT LEVEL
            </div>
            <p style={{ fontSize: 15, color: "#94a3b8", marginTop: 12 }}>
              Multiple irreconcilable contradictions detected between FIR and Court Deposition.
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 3: PHOTOMETRIC SOLAR TIMELINE (Frames 660 - 1020)
// =========================================================================
export const Scene3Timeline: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 330, 360], [0, 1, 1, 0]);

  // Animate time scrub from 18:15 to 21:45
  const timeProgress = interpolate(frame, [20, 260], [0, 1], { extrapolateRight: "clamp" });
  const lux = Math.round(interpolate(timeProgress, [0, 0.4, 0.8, 1], [12000, 450, 20, 0]));

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070b12",
        opacity,
        display: "flex",
        flexDirection: "column",
        padding: 50,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#f8fafc"
      }}
    >
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 20 }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: "#d4af37", margin: 0 }}>
          ☀️ PHOTOMETRIC SOLAR ILLUMINATION MAP
        </h2>
        <p style={{ fontSize: 18, color: "#94a3b8", margin: "8px 0 0 0" }}>
          Astronomical verification under Section 65B IEA / Section 63 BSA
        </p>
      </div>

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
        {/* Left: Scientific Proof */}
        <div style={{ padding: 32, borderRadius: 16, backgroundColor: "#0f172a", border: "1px solid #1e293b" }}>
          <div style={{ color: "#38bdf8", fontSize: 16, fontWeight: 700, fontFamily: "monospace", marginBottom: 12 }}>
            ASTRONOMICAL LUX SCRUBBER
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, color: lux === 0 ? "#f43f5e" : "#f59e0b", fontFamily: "monospace" }}>
            {lux.toLocaleString()} LUX
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, color: "#cbd5e1", marginTop: 8 }}>
            {lux > 1000 ? "BROAD DAYLIGHT (Sun Elevation +24.5°)" : "PITCH DARK BLACKOUT (Sun Elevation -38.2°)"}
          </div>
          <p style={{ fontSize: 16, color: "#94a3b8", marginTop: 16, lineHeight: 1.5 }}>
            Witness claimed in court they could clearly see the accused's facial features from 50 feet away.
            Scientific solar position data mathematically disproves ocular identification capability.
          </p>
        </div>

        {/* Right: The Variance Comparison */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ padding: 24, borderRadius: 12, backgroundColor: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.4)" }}>
            <div style={{ color: "#10b981", fontSize: 14, fontWeight: 700, fontFamily: "monospace" }}>
              EX. P-1: POLICE FIR (184/2024)
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#f8fafc", margin: "6px 0" }}>
              21:45 PM (9:45 PM Night)
            </div>
            <div style={{ fontSize: 15, color: "#cbd5e1" }}>
              "Total power blackout in our galli... pitch dark... could only recognize by voice."
            </div>
          </div>

          <div style={{ padding: 24, borderRadius: 12, backgroundColor: "rgba(225, 29, 72, 0.1)", border: "1px solid rgba(225, 29, 72, 0.4)" }}>
            <div style={{ color: "#f43f5e", fontSize: 14, fontWeight: 700, fontFamily: "monospace" }}>
              EX. D-1: COURT DEPOSITION (ON OATH)
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#f8fafc", margin: "6px 0" }}>
              18:15 PM (6:15 PM Daylight)
            </div>
            <div style={{ fontSize: 15, color: "#cbd5e1" }}>
              "Incident occurred in bright daylight; I saw accused clearly." [FATAL +3.5 HR SHIFT]
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 4: CONTRADICTION MATRIX & STATUTORY PRECEDENTS (Frames 1020 - 1440)
// =========================================================================
export const Scene4Matrix: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 390, 420], [0, 1, 1, 0]);

  const cards = [
    {
      title: "Temporal Shift (+3.5 Hours)",
      badge: "FATAL IMPEACHMENT",
      color: "#f43f5e",
      statute: "Section 145 Indian Evidence Act / Section 148 BSA",
      desc: "FIR reported 21:45 PM pitch darkness; shifted to 18:15 PM broad daylight in court."
    },
    {
      title: "Weapon Escalation (Stick vs Knife)",
      badge: "FATAL IMPEACHMENT",
      color: "#f43f5e",
      statute: "Tahsildar Singh v. State of U.P. (1959 SC)",
      desc: "Upgraded from a blunt wooden lathi in 161 statement to a 10-inch butcher knife in dock."
    },
    {
      title: "Direct Medical Impossibility",
      badge: "FATAL IMPEACHMENT",
      color: "#f43f5e",
      statute: "Ram Narain v. State of Punjab (1975 SC)",
      desc: "Swore to repeated stabbing in chest. Forensic autopsy certifies ZERO incised wounds."
    },
    {
      title: "Material Omission of Co-Accused",
      badge: "MATERIAL VARIATION",
      color: "#f59e0b",
      statute: "Section 162 CrPC Explanation / Sec 181 BNSS",
      desc: "Sunny was exonerated in police statement, but falsely given an active holding role in court."
    }
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070b12",
        opacity,
        display: "flex",
        flexDirection: "column",
        padding: 50,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#f8fafc"
      }}
    >
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 20 }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: "#d4af37", margin: 0 }}>
          ⚖️ WITNESS CONTRADICTION MATRIX
        </h2>
        <p style={{ fontSize: 18, color: "#94a3b8", margin: "8px 0 0 0" }}>
          Surgical evidentiary variance engine mapped across police statements and trial testimonies.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 30 }}>
        {cards.map((c, i) => (
          <div
            key={i}
            style={{
              padding: 24,
              borderRadius: 14,
              backgroundColor: "#0f172a",
              border: `1px solid ${c.color}60`,
              boxShadow: `0 8px 30px rgba(0,0,0,0.4)`
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontFamily: "monospace", fontWeight: 700, padding: "4px 10px", borderRadius: 4, backgroundColor: `${c.color}20`, color: c.color }}>
                {c.badge}
              </span>
              <span style={{ fontSize: 13, color: "#94a3b8", fontFamily: "monospace" }}>
                [Click to Impeach]
              </span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, margin: "6px 0", color: "#f8fafc" }}>
              {c.title}
            </h3>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#d4af37", marginBottom: 8 }}>
              {c.statute}
            </div>
            <p style={{ fontSize: 15, color: "#cbd5e1", margin: 0, lineHeight: 1.4 }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 5: 4-STAGE QUESTION TREE & WITNESS BRANCHING (Frames 1440 - 1800)
// =========================================================================
export const Scene5QuestionTree: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20, 330, 360], [0, 1, 1, 0]);

  // Cycle branches: YES -> NO -> UNCERTAIN
  const branchIdx = Math.floor(interpolate(frame, [0, 360], [0, 3], { extrapolateRight: "clamp" }));
  const branches = ["YES (Concedes)", "NO (Denies)", "I DO NOT RECALL (Evades)"];
  const currentBranch = branches[Math.min(2, branchIdx)];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070b12",
        opacity,
        display: "flex",
        flexDirection: "column",
        padding: 50,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#f8fafc"
      }}
    >
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 20 }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: "#d4af37", margin: 0 }}>
          🎯 4-STAGE CROSS-EXAMINATION DOCTRINE
        </h2>
        <p style={{ fontSize: 18, color: "#94a3b8", margin: "8px 0 0 0" }}>
          Target Contradiction: Medical Impossibility (Stab Wounds vs. Blunt Trauma)
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 30, marginTop: 30 }}>
        {/* 4 Stages */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ padding: 16, borderRadius: 10, backgroundColor: "#0f172a", border: "1px solid #1e293b" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#38bdf8", fontFamily: "monospace" }}>STAGE 1: COMMITMENT</span>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc", marginTop: 4 }}>
              "You testified on oath today that you saw the victim stabbed multiple times in the chest?"
            </div>
          </div>

          <div style={{ padding: 16, borderRadius: 10, backgroundColor: "#0f172a", border: "1px solid #1e293b" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#f59e0b", fontFamily: "monospace" }}>STAGE 2: FOUNDATION</span>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc", marginTop: 4 }}>
              "You were standing within 5 feet and your eyesight is completely unimpaired, correct?"
            </div>
          </div>

          <div style={{ padding: 16, borderRadius: 10, backgroundColor: "#0f172a", border: "1px solid #f43f5e" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#f43f5e", fontFamily: "monospace" }}>STAGE 3: CONFRONTATION</span>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginTop: 4 }}>
              "I show you Post-Mortem Report Ex. P-4 certifying ZERO stab wounds. Isn't your entire stabbing story a complete fabrication?"
            </div>
          </div>

          <div style={{ padding: 16, borderRadius: 10, backgroundColor: "#0f172a", border: "1px solid #d4af37" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#d4af37", fontFamily: "monospace" }}>STAGE 4: IMPEACHMENT</span>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#f8fafc", marginTop: 4 }}>
              "Pray to mark portion 'A' under Section 145 IEA / 148 BSA as judicial defense exhibit."
            </div>
          </div>
        </div>

        {/* Evasion Branching Box */}
        <div style={{ padding: 24, borderRadius: 16, backgroundColor: "#0f172a", border: "1px solid rgba(212,175,55,0.4)" }}>
          <div style={{ color: "#d4af37", fontSize: 14, fontWeight: 700, fontFamily: "monospace", marginBottom: 12 }}>
            ADAPTIVE WITNESS EVASION TRAP
          </div>
          <div style={{ padding: "8px 16px", borderRadius: 8, backgroundColor: "rgba(16,185,129,0.2)", color: "#10b981", fontSize: 18, fontWeight: 700, marginBottom: 16 }}>
            Witness Answers: {currentBranch}
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginBottom: 8 }}>
            Advocate Immediate Follow-Up:
          </div>
          <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.5, margin: 0 }}>
            "If your memory fails on whether a knife was used, on what basis can this Hon'ble Court trust your identification of the accused?"
          </p>

          <div style={{ marginTop: 20, padding: 14, borderRadius: 8, backgroundColor: "#020617", border: "1px solid #1e293b" }}>
            <span style={{ color: "#f43f5e", fontSize: 12, fontWeight: 700 }}>OBJECTION FORECAST: </span>
            <span style={{ color: "#94a3b8", fontSize: 13 }}>Public Prosecutor: 'Leading question' ➔ </span>
            <strong style={{ color: "#10b981", fontSize: 13 }}>RULING: OVERRULED</strong>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =========================================================================
// SCENE 6: OUTRO & LIVE SUBMISSION (Frames 1800 - 2100)
// =========================================================================
export const Scene6Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#06090e",
        opacity,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
        textAlign: "center",
        padding: 60
      }}
    >
      <div style={{ fontSize: 72, marginBottom: 20 }}>⚖️</div>
      <h2 style={{ fontSize: 60, fontWeight: 900, color: "#d4af37", margin: 0 }}>
        NYAYACROSS
      </h2>
      <p style={{ fontSize: 28, color: "#94a3b8", marginTop: 12, maxWidth: 900 }}>
        Litigation Combat Intelligence Built for Real Indian Trial Advocates
      </p>

      {/* Feature Highlights Grid */}
      <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
        <div style={{ padding: "16px 24px", borderRadius: 12, backgroundColor: "#0f172a", border: "1px solid #1e293b", fontSize: 18, color: "#f8fafc" }}>
          ⚡ 0ms Client-Side Privacy
        </div>
        <div style={{ padding: "16px 24px", borderRadius: 12, backgroundColor: "#0f172a", border: "1px solid #1e293b", fontSize: 18, color: "#f8fafc" }}>
          🏛️ Sec 145 IEA / 148 BSA
        </div>
        <div style={{ padding: "16px 24px", borderRadius: 12, backgroundColor: "#0f172a", border: "1px solid #1e293b", fontSize: 18, color: "#f8fafc" }}>
          📬 AgentMail Teammate
        </div>
      </div>

      <div style={{ marginTop: 50, padding: "16px 32px", borderRadius: 30, backgroundColor: "rgba(212,175,55,0.15)", border: "1px solid #d4af37", color: "#d4af37", fontSize: 24, fontWeight: 700 }}>
        🌐 Live Application: https://nyaya-cross.vercel.app/
      </div>

      <div style={{ marginTop: 24, color: "#64748b", fontSize: 16 }}>
        HackIndia 2026 • AI for Lawyers Track • Gaurav Shivhare & Antigravity
      </div>
    </AbsoluteFill>
  );
};

// =========================================================================
// MAIN VIDEO COMPOSITION ROOT (Total: 2100 frames = 70 seconds @ 30 FPS)
// =========================================================================
export const NyayaCrossVideoWalkthrough: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Sequence from={0} durationInFrames={300}>
        <Scene1Hook />
      </Sequence>
      <Sequence from={300} durationInFrames={360}>
        <Scene2WarRoom />
      </Sequence>
      <Sequence from={660} durationInFrames={360}>
        <Scene3Timeline />
      </Sequence>
      <Sequence from={1020} durationInFrames={420}>
        <Scene4Matrix />
      </Sequence>
      <Sequence from={1440} durationInFrames={360}>
        <Scene5QuestionTree />
      </Sequence>
      <Sequence from={1800} durationInFrames={300}>
        <Scene6Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
