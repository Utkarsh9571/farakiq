import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Caveat } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

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

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.farakiq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FARAKIQ — Web Development, Full-Stack & AI Systems",
    template: "%s | FARAKIQ",
  },
  description:
    "FARAKIQ builds websites, AI automation, and performance marketing systems for founders who want one accountable partner instead of five vendors.",
  keywords: [
    "Website Development",
    "AI Automation",
    "SEO",
    "Google Ads",
    "Meta Ads",
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
    description:
      "FARAKIQ builds websites, AI automation, and performance marketing systems for founders who want one accountable partner instead of five vendors.",
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
    description:
      "FARAKIQ builds websites, AI automation, and performance marketing systems for founders who want one accountable partner instead of five vendors.",
    images: ["/og-image.svg"],
  },
  verification: {
    other: {
      "msvalidate.01": "FB47F5FB331C8C0209A9B76F63D5CB25",
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "FARAKIQ",
      url: siteUrl,
      logo: `${siteUrl}/farakiq-logo.svg`,
      image: `${siteUrl}/og-image.svg`,
      email: "hello@farakiq.com",
      description:
        "FARAKIQ builds websites, AI automation, and performance marketing systems for founders who want one accountable partner instead of five vendors.",
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
        "Google Ads Management",
        "Meta Ads & Performance Marketing",
        "Search Engine Optimization (SEO)",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
        "AI Search Optimization",
        "AI Chatbot Development",
        "WhatsApp Automation",
        "Business Process Automation",
        "REST API Integration",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@farakiq.com",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "FARAKIQ",
      description:
        "FARAKIQ builds websites, AI automation, and performance marketing systems for founders who want one accountable partner instead of five vendors.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${caveat.variable}`}>
      <head>
        <StructuredData data={jsonLdOrganization} id="farakiq-organization-schema" />
      </head>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
