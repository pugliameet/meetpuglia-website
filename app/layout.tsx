import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "MeetPuglia — Vivi la Puglia, insieme", template: "%s | MeetPuglia" },
  description: "Scopri, crea e vivi eventi ed esperienze in tutta la Puglia con MeetPuglia, un servizio di HOLD S.R.L.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
