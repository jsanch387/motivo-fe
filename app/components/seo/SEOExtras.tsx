"use client";
import { usePathname } from "next/navigation";
import Head from "next/head";

export default function SEOExtras() {
  const pathname = usePathname();

  return (
    <>
      <Head>
        {/* SEO essentials */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Launch your business in minutes—not days. Motivo gives you a business name, logo, marketing flyer, and tools to get your first clients fast. No design skills needed."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://usemotivo.app${pathname === "/" ? "" : pathname}`}
        />

        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization", // ✅ Updated to Organization for logo + brand support
            name: "Motivo",
            url: "https://usemotivo.app",
            logo: "https://usemotivo.app/og-image.png", // ✅ Add your logo file path
            description:
              "Motivo helps entrepreneurs start and grow businesses with AI-powered branding and marketing tools.",
          }),
        }}
      />
    </>
  );
}
