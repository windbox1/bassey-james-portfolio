import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { portfolio } from "../content/portfolio";
import "./globals.css";

const display = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.intro,
  openGraph: { title: `${portfolio.name} — ${portfolio.role}`, description: portfolio.headline, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${mono.variable}`}>{children}</body></html>;
}
