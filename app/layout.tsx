import type { Metadata } from "next";
import Link from "next/link";
import { site, getProduct } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Practical Guides, Ebooks & Printables`, template: `%s — ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, url: site.url, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">{site.name}</Link>
          <span className="brand-tag">Practical guides &amp; done-for-you picks</span>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <p>
            {site.name} — free practical guides.{" "}
            <a href={getProduct().url}>{getProduct().name}</a>
          </p>
          <p className="footer-legal">
            <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> ·{" "}
            <a href="/disclaimer/">Disclaimer</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
