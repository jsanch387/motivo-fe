"use client";

import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-32 sm:py-40 lg:py-52 min-h-[90vh] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700 opacity-30 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-30 blur-2xl rounded-full transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
            Build & Launch Your Side Hustle — Fast.
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xl mb-10">
            Generate your business name, logo, website, social posts, and legal
            docs — all with AI. Everything you need to get started in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/auth/signup" type="primary" size="lg">
              🚀 Start Building
            </Button>

            <Button href="/dashboard" type="secondary" size="lg">
              Preview Dashboard
            </Button>
          </div>
        </div>

        {/* Right Image / Visual */}
        <div className="flex justify-center">
          <Image
            src="/next.svg"
            alt="Hero Visual"
            width={320}
            height={320}
            className="opacity-80 dark:invert"
          />
        </div>
      </div>
    </section>
  );
}
