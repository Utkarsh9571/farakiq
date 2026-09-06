import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
  authors: [{ name: "Utkarsh Gaur", url: siteUrl }],
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

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "FARAKIQ",
  url: siteUrl,
  logo: `${siteUrl}/farakiq-logo.svg`,
  image: `${siteUrl}/og-image.svg`,
  description: "FARAKIQ provides custom website development, full-stack web applications, e-commerce solutions, AI integrations, and business workflow automations.",
  slogan: "We make the difference",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Website Development",
    "Full-Stack Web Development",
    "Web Applications",
    "E-Commerce Solutions",
    "AI Integrations",
    "n8n Workflow Automation",
  ],
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Utkarsh Gaur",
  jobTitle: "Founder & Lead Engineer",
  worksFor: {
    "@type": "Organization",
    name: "FARAKIQ",
  },
  knowsAbout: [
    "Full-Stack Web Development",
    "React / Next.js",
    "TypeScript",
    "AI Integrations",
    "Workflow Automation",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
