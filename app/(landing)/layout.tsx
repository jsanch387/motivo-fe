// app/(landing)/layout.tsx
import { Urbanist } from "next/font/google";
import Navbar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/LandingMobileNav";
import AuthInitializer from "../features/Authentication/AuthInitializer";
import Footer from "../features/landing/Footer";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600"], // Removed 800 unless absolutely needed
  display: "swap", // Improves font loading performance
});

export const metadata = {
  title: {
    default: "Start Your Business in 1 Day | Motivo ",
    template: "%s | Motivo", // For child pages
  },
  description:
    "Launch your business in minutes—not days. Motivo gives you a business name, logo, marketing flyer, and tools to get your first clients fast. No design skills needed.",
  keywords: [
    "how to start a business",
    "business startup tools",
    "get first clients fast",
    "side hustle branding",
    "LLC formation aid",
  ],
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://usemotivo.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://usemotivo.app" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Motivo",
            description: "Tools to start any type of business",
            url: "https://usemotivo.app",
            applicationCategory: "BusinessApplication",
            featureList: [
              "Business Name Generator",
              "Custom Logo Design",
              "Client Contract Templates",
            ],
          })}
        </script>
      </head>
      <body
        className={`${urbanist.className} min-h-screen flex flex-col bg-[var(--background)]`}
      >
        <AuthInitializer />

        {/* Mobile Nav */}
        <MobileNav />

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-1">
          {children}
          <Analytics />
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
