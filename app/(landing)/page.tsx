"use client";

import { Urbanist } from "next/font/google";
import HeroSection from "../features/landing/HeroSection";
import FeatureHighlights from "../features/landing/FeatureHighlights";
import TestimonialsSection from "../features/landing/TestimonialsSection";
import FAQSection from "../features/landing/FAQSection";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function Home() {
  return (
    <>
      <div
        className={`text-white min-h-[90vh] ${urbanist.className}  text-[color:var(--foreground)]`}
      >
        <HeroSection />
        <TestimonialsSection />
        <FeatureHighlights />

        {/* <ProductPreview />       // optional but 🔥 */}
        {/* <PricingSection /> */}
        <FAQSection />
        {/* <CallToAction /> */}
      </div>
    </>
  );
}
