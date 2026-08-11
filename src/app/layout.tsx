import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { ConsultationProvider } from "@/components/ConsultationProvider";
import { getMessages } from "@/i18n";
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
const t = getMessages();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: t.meta.title,
    template: "%s — Zentra Financial",
  },
  description: t.meta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Zentra Financial",
    title: t.meta.title,
    description: t.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: t.meta.title,
    description: t.meta.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Zentra Financial",
  description: t.meta.jsonLdDescription,
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
