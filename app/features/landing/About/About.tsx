"use client";

import Background from "@/app/components/ui/Background";

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 sm:px-10 lg:px-20 py-24 text-[color:var(--foreground)]">
      <Background />

      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            We&apos;re Here to Help You Start
          </h1>
          <p className="text-lg text-gray-400">
            Motivo helps you launch your business in minutes — with your name,
            branding, tools, and a flyer to promote it. Fast, simple, and made
            for side hustlers.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Built for Starters</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            We built Motivo because starting a business shouldn’t be
            complicated. Whether it’s your first hustle or your next big idea,
            we give you a starting point that looks and feels professional —
            without the overwhelm.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Your Brand, Done</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            From a scroll-stopping name to a logo and color palette that stands
            out, we help you craft your brand in minutes. You pick what fits,
            and we handle the rest.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Tools, Services & Launch
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            We recommend the tools you need to run your business and suggest
            services and pricing so you&apos;re not guessing. And with a launch
            flyer ready to post, you can start promoting same day.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">What’s Coming</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            This is just the beginning. Soon, you’ll be able to create business
            cards, schedule social posts, and even launch a simple website — all
            inside Motivo. But for now, we help you start strong.
          </p>
        </div>
      </div>
    </section>
  );
}
