import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NyayaCross | AI Trial War Room & Cross-Examination Contradiction Engine',
  description: 'Autonomous litigation intelligence that detects witness contradictions across trial dockets and generates tactical cross-examination question trees.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-court-900 text-slate-100 antialiased selection:bg-amber-500/20 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
