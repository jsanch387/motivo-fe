"use client";
// REMOVED: import { Urbanist } from "next/font/google"; // No longer needed here
import React from "react";

// REMOVED: const urbanist = Urbanist({ ... }); // No longer needed here

export default function SiteBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The urbanist.className is applied to the <body> in layout.tsx,
    // so it's already inherited by this component and its children.
    // REMOVED: ${urbanist.className} from the className string
    <div className={`site-bg relative isolate overflow-hidden`}>
      {/*
        === GLOBAL BACKGROUND GLOWS (Moved from Hero Section) ===
        These glows are now part of the global SiteBackground, ensuring they
        are visible across the entire page and interact with the grid.
        They are positioned absolutely and have a negative z-index to stay behind content.
      */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/*
          Background Wash: A subtle linear gradient to provide a base color
          that complements the glowing orbs and the global grid.
          It transitions from a very light, almost transparent white to a soft,
          cool-toned light blue, providing a clean canvas.
        */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(248,250,252,0.8)_50%,rgba(240,245,250,0.9)_100%)]" />

        {/*
          Accent Orbs: These are the core glowing elements.
          - 'animate-hero-float' and 'animate-hero-float-delayed' provide a subtle,
            gentle floating animation for a dynamic feel.
          - 'rounded-full' makes them circular.
          - 'blur' creates the soft, diffused glow effect.
          - 'mix-blend-plus-lighter' ensures they blend beautifully with the background
            and other glow elements, creating luminous overlaps.
          - Colors are chosen to harmonize with the existing text gradient (indigo, purple, pink).
          - Sizes and opacities are adjusted to provide strong, visible glows
            without directly tinting the central content area.
        */}

        {/* Top-Left Orb: Vibrant blue glow */}
        <div className="absolute left-[5%] top-[10%] h-[500px] w-[500px] animate-hero-float rounded-full bg-blue-500/30 blur-[180px] mix-blend-plus-lighter" />

        {/* Mid-Right Orb: Energetic pink glow, slightly delayed animation */}
        <div className="absolute right-[8%] top-[20%] h-[550px] w-[550px] animate-hero-float-delayed rounded-full bg-pink-500/30 blur-[200px] mix-blend-plus-lighter" />

        {/* Bottom-Left Orb: Deep purple glow, providing anchor at the bottom */}
        <div className="absolute left-[15%] bottom-[5%] h-[450px] w-[450px] animate-hero-float rounded-full bg-purple-500/30 blur-[170px] mix-blend-plus-lighter" />

        {/*
          Central Strong Radial Focus:
          This is crucial for keeping the form area pure white.
          It's a strong white radial gradient centered on the content area,
          effectively "pushing" the background colors away from the form and text,
          ensuring they remain crisp and untinted.
          The opacity is increased significantly to ensure a bright white core.
        */}
        <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0)_70%)]" />
      </div>

      {/*
        Minimal animations (only needed for orbs)
        These global styles define the floating animations for the background orbs.
        They are included here as they are directly referenced by the orbs within this component.
      */}
      <style jsx global>{`
        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-22px) scale(1.035);
          }
        }
        @keyframes heroFloatDelayed {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(18px) scale(0.97);
          }
        }
        .animate-hero-float {
          animation: heroFloat 18s ease-in-out infinite;
        }
        .animate-hero-float-delayed {
          animation: heroFloatDelayed 22s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-hero-float,
          .animate-hero-float-delayed {
            animation: none !important;
          }
        }
      `}</style>

      {/* This is where the children (HeroSection, Testimonials, etc.) will be rendered */}
      {children}
    </div>
  );
}
