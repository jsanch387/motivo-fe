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
  metadataBase: new URL("https://usemotivo.app"), // Crucial for resolving relative URLs
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
    "motivo",
    "motivo app",
    "entrepreneur tools",
  ],
  icons: {
    icon: "/favicon.png", // Ensure this path is correct from the /public directory
  },
  alternates: {
    canonical: "/", // For the homepage
    // Add other alternates like languages if needed here
  },
  robots: {
    // Be explicit about indexing
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
    url: "/", // Relative to metadataBase for the homepage
    siteName: "Motivo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motivo: AI-powered tools to start your business quickly.", // More descriptive alt
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
    logo: "https://usemotivo.app/your-actual-logo.png", // Replace with your actual logo URL
    description:
      "Motivo helps entrepreneurs start and grow businesses with AI-powered branding and marketing tools.",
    sameAs: [
      // Add your social media profiles
      "https://twitter.com/usemotivo", // Example, replace with actual
      "https://www.linkedin.com/company/usemotivo", // Example, replace with actual
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for fonts - good to keep if they are critical */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous" // 'anonymous' is often better than just `true`
        />
        {/* SEOExtras component is removed. Its functionality is now in the metadata object or here. */}
      </head>
      <body
        className={`${urbanist.className} min-h-screen flex flex-col bg-[var(--background)]`}
      >
        {/* AuthInitializer should not interfere with metadata if it's purely for auth state */}
        <AuthInitializer />
        <MobileNav />
        <div className="hidden md:block">
          <Navbar />
        </div>
        <main className="flex-1">
          {children}
          <Analytics /> {/* Vercel Analytics is fine */}
        </main>
        <Footer />
        {/* Add JSON-LD structured data here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
      </body>
    </html>
  );
}
