// components/SEOExtras.tsx
"use client";
import { usePathname } from "next/navigation";

export default function SEOExtras() {
  const pathname = usePathname();

  return (
    <>
      {/* Dynamic canonical */}
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </>
  );
}
