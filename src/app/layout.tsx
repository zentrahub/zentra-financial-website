import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { ConsultationProvider } from "@/components/ConsultationProvider";
import "./globals.css";

// Heading face — thin, wide, geometric, echoing the wordmark's own
// letterforms. Body text uses system stacks (see globals.css), so this
// is the only webfont the site loads.
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
});

const siteUrl = "https://www.zentrafinancial.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zentra Financial — Premium Tax Strategy & Financial Advisory",
    template: "%s — Zentra Financial",
  },
  description:
    "Zentra Financial advises established business owners on tax strategy, financial structure, and business architecture, in the United States and abroad.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Zentra Financial",
    title: "Zentra Financial — Premium Tax Strategy & Financial Advisory",
    description:
      "Zentra Financial advises established business owners on tax strategy, financial structure, and business architecture, in the United States and abroad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentra Financial — Premium Tax Strategy & Financial Advisory",
    description:
      "Zentra Financial advises established business owners on tax strategy, financial structure, and business architecture, in the United States and abroad.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zentra Financial",
  description:
    "Premium tax strategy and financial advisory for established business owners.",
  url: siteUrl,
  areaServed: ["US", "International"],
  priceRange: "$$$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ConsultationProvider>{children}</ConsultationProvider>
      </body>
    </html>
  );
}
