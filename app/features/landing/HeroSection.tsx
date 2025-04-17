"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative px-6 sm:px-10 lg:px-20 pt-24 pb-20 sm:pt-32 sm:pb-32 lg:pt-36 lg:pb-36 text-center">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-20 blur-[120px] transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>

      {/* Heading & CTA */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
          Build Your Brand.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Launch with Confidence.
          </span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Everything you need to get your side hustle off the ground — from name
          and logo to services, tools, and a custom flyer.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/signup" type="primary" size="lg">
            Get Started
          </Button>
          <Button href="/dashboard" type="secondary" size="lg">
            Dashboard
          </Button>
        </div>
      </div>

      {/* Screenshot */}
      <div className="mt-16 sm:mt-20 flex justify-center">
        <div className="w-full max-w-[1150px] lg:max-w-[1280px] rounded-xl overflow-hidden">
          <Image
            src="/brand-kit3.png" // replace with your correct path
            alt="Generated Brand Kit Preview"
            width={2000}
            height={1200}
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
