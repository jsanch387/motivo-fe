// app/(landing)/layout.tsx
import { Urbanist } from "next/font/google";
import Navbar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/LandingMobileNav";
import AuthInitializer from "../features/Authentication/AuthInitializer";
import Footer from "../features/landing/Footer";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const urbanist = Urbanist({
  subsets: ["latin"],
  // IMPORTANT: Added '900' to the weights to correctly support font-black
  weight: ["400", "600", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usemotivo.app"),
  title: {
    default: "Turn Your Expertise Into Profitable Digital Products | Motivo",
    template: "%s | Motivo",
  },
  description:
    "Creators with 2k–10k followers: stop leaving money on the table. Motivo instantly builds niche‑specific guides, workbooks, calendars, and checklists you can start selling today—zero design or tech hassle.",
  keywords: [
    "creator monetization",
    "digital product bundles",
    "sell digital products",
    "guides and workbooks",
    "content creator tools",
    "make money online",
    "done‑for‑you products",
    "ebook creator",
    "passive income",
  ],
  icons: {
    icon: "/favicon.png",
  },
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
  openGraph: {
    title: "Turn Your Expertise Into Profitable Digital Products | Motivo",
    description:
      "Motivo crafts ready‑to‑sell guides, templates, and checklists so you can monetize your audience in minutes—no design skills needed.",
    url: "/",
    siteName: "Motivo",
    images: [
      {
        url: "/og-image.png", // swap this when you have a new banner
        width: 1200,
        height: 630,
        alt: "Motivo converts your knowledge into ready‑to‑sell digital products.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Motivo",
    url: "https://usemotivo.app",
    logo: "https://usemotivo.app/favicon.png",
    description:
      "Motivo empowers creators to monetize faster with AI‑built digital‑product bundles—guides, calendars, templates, and more.",
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Motivo",
    alternateName: "usemotivo.app",
    url: "https://usemotivo.app",
    description:
      "Generate high‑value, ready‑to‑sell digital products tailored to your niche and audience size.",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Add both structured data scripts here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />
      </head>
      <body
        className={`${urbanist.className} min-h-screen flex flex-col bg-[var(--background)]`}
      >
        <AuthInitializer />
        <MobileNav />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <main className="flex-1">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
