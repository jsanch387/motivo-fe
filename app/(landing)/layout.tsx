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
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usemotivo.app"),
  title: {
    default: "Start Your Business in 1 Day | Motivo",
    template: "%s | Motivo",
  },
  description:
    "Launch your business in minutes—not days. Motivo gives you a business name, logo, marketing flyer, and tools to get your first clients fast. No design skills needed.",
  keywords: [
    "business startup",
    "ai business tools",
    "logo generator",
    "marketing flyer creator",
    "start a business",
    "service based business",
    "entrepreneur tools",
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
    title: "Start Your Business in 1 Day | Motivo",
    description:
      "Launch your business in minutes—not days. Get a business name, logo, flyer, and more.",
    url: "/",
    siteName: "Motivo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motivo: AI-powered tools to start your business quickly.",
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
      "Motivo helps entrepreneurs start and grow businesses with AI-powered branding and marketing tools.",
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Motivo",
    alternateName: "usemotivo.app",
    url: "https://usemotivo.app",
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
