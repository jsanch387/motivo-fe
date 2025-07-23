"use client";

// import { Urbanist } from "next/font/google";
import HeroSection from "../features/landing/HeroSection";
import SiteBackground from "../features/landing/SiteBackground";
import ProblemSection from "../features/landing/ProblemSection";
import HowItWorks from "../features/landing/HowItWorks";
import WhatYouGet from "../features/landing/WhatYouGet";
import SocialProof from "../features/landing/SocialProof";

// const urbanist = Urbanist({
//   subsets: ["latin"],
//   weight: ["400", "600", "800"],
// });

export default function Home() {
  return (
    // <>
    //   <div
    //     className={`text-white min-h-[90vh] ${urbanist.className}  text-[color:var(--foreground)]`}
    //   >
    //     <HeroSection />
    //     <TestimonialsSection />
    //     <FeatureHighlights />

    //     {/* <ProductPreview />       // optional but 🔥 */}
    //     {/* <PricingSection /> */}
    //     <FAQSection />
    //     {/* <CallToAction /> */}
    //   </div>
    // </>

    <SiteBackground>
      <HeroSection /> {/* still has its own orb/glow divs */}
      <ProblemSection />
      <WhatYouGet />
      <HowItWorks />
      <SocialProof />
    </SiteBackground>
  );
}
