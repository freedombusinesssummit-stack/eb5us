import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freedom Business Summit 2026 — Invest America Edition 🇺🇸 | EB-5 & E-2 Summit",
  description: "The Definitive Virtual Summit for EB-5 & E-2 Investor Visas. August 20–21, 2026. For global entrepreneurs ready to enter the U.S. before the September 2026 deadline.",
  openGraph: {
    title: "Invest America Summit 2026 — EB-5 & E-2",
    description: "The premier virtual summit for foreign investors entering the U.S. via EB-5 and E-2 visas.",
    url: "https://investamerica.fsummit.net",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
