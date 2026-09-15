import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://farakiq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FARAKIQ — Web Development, Full-Stack & AI Systems",
    template: "%s | FARAKIQ",
  },
  description: "FARAKIQ delivers custom website development, full-stack web applications, business platforms, e-commerce stores, AI integrations, and n8n workflow automations. We make the difference.",
  keywords: [
    "FARAKIQ",
    "Website Development",
    "Full-Stack Web Development",
    "Web Applications",
    "Business Websites",
    "E-Commerce Development",
    "AI Integrations",
    "n8n Workflow Automation",
    "Custom Software Engineering",
  ],
  authors: [
    { name: "FARAKIQ", url: siteUrl },
  ],
  creator: "FARAKIQ",
  publisher: "FARAKIQ",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "FARAKIQ — Web Development, Full-Stack & AI Systems",
    description: "Custom website development, full-stack web applications, e-commerce platforms, AI integrations, and automated workflows. We make the difference.",
    url: siteUrl,
    siteName: "FARAKIQ",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FARAKIQ — We Make The Difference",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FARAKIQ — Web Development, Full-Stack & AI Systems",
    description: "Custom website development, full-stack web applications, e-commerce platforms, AI integrations, and automated workflows.",
    images: ["/og-image.svg"],
  },
};

const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FARAKIQ",
  url: siteUrl,
  logo: `${siteUrl}/farakiq-logo.svg`,
  image: `${siteUrl}/og-image.svg`,
  email: "hello@farakiq.com",
  description:
    "FARAKIQ delivers custom website development, full-stack web applications, e-commerce platforms, AI integrations, and automated workflows. We make the difference.",
  slogan: "We make the difference",
  priceRange: "₹₹₹",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Website Development",
    "Full-Stack Web Development",
    "Web Applications",
    "E-Commerce Solutions",
    "AI Integrations",
    "n8n Workflow Automation",
    "Google Ads & Paid Search",
    "Meta Ads & Performance Marketing",
    "Search Engine Optimization (SEO)",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <head>
        <StructuredData data={jsonLdProfessionalService} id="farakiq-organization-schema" />
      </head>
      <body>{children}</body>
    </html>
  );
}
