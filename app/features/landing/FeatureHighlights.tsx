"use client";

import Card from "@/app/components/ui/Card";
import {
  SparklesIcon,
  PaintBrushIcon,
  ClipboardDocumentCheckIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-blue-400" />,
    title: "Business Name Ideas",
    description:
      "Get unique, brandable name suggestions powered by Motivo — tailored to your service and location.",
  },
  {
    icon: <PaintBrushIcon className="w-8 h-8 text-purple-400" />,
    title: "Logo & Brand Colors",
    description:
      "We generate a clean logo and a professional color palette — no design experience needed.",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-green-400" />,
    title: "Services & Pricing",
    description:
      "Not sure what to offer or how much to charge? We'll help you define and price your services.",
  },
  {
    icon: <MegaphoneIcon className="w-8 h-8 text-pink-400" />,
    title: "Promo Flyer for Socials",
    description:
      "Get a professionally designed flyer you can instantly share on Instagram, Facebook, or print.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Subtle background glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top-left soft purple glow */}
        <div className="absolute top-[15%] left-[-80px] w-[300px] h-[300px] bg-purple-600 opacity-15 blur-[100px] rounded-full" />

        {/* Bottom-right soft blue glow */}
        <div className="absolute bottom-[-60px] right-[-80px] w-[300px] h-[300px] bg-blue-500 opacity-15 blur-[100px] rounded-full" />
      </div>
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          What You Get with Motivo
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your all-in-one starter kit — from a logo and name to your launch
          flyer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-[rgba(255,255,255,0.02)] border border-zinc-800 rounded-xl p-6 backdrop-blur-md hover:border-purple-500 transition shadow-md"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
