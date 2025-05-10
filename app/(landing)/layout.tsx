// app/(landing)/layout.tsx
import { Urbanist } from "next/font/google";
import Navbar from "../components/navigation/NavBar";
import MobileNav from "../components/navigation/LandingMobileNav";
import AuthInitializer from "../features/Authentication/AuthInitializer";
import Footer from "../features/landing/Footer";
import "../globals.css";
import { Analytics } from "@vercel/analytics/react";
import SEOExtras from "../components/seo/SEOExtras";
import { Metadata } from "next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Start Your Business in 1 Day | Motivo",
    template: "%s | Motivo",
  },
  description:
    "Launch your business in minutes—not days. Motivo gives you a business name, logo, marketing flyer, and tools to get your first clients fast. No design skills needed.",
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://usemotivo.app"),
  openGraph: {
    title: "Start Your Business in 1 Day | Motivo",
    description:
      "Launch your business in minutes—not days. Get a business name, logo, flyer, and more.",
    url: "https://usemotivo.app",
    siteName: "Motivo",
    images: [
      {
        url: "https://usemotivo.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motivo - Start Your Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Business in 1 Day | Motivo",
    description:
      "Launch your business in minutes—not days. Get a business name, logo, flyer, and more.",
    images: ["https://usemotivo.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} min-h-screen flex flex-col bg-[var(--background)]`}
      >
        <SEOExtras />
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
