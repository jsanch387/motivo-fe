"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly do I get with the brand kit?",
    answer:
      "You’ll get a custom business name, logo, brand colors, suggested services and pricing, tool recommendations, and a launch flyer you can post on social media.",
  },
  {
    question: "Do I need any design or business experience?",
    answer:
      "Nope! We guide you through everything — from your name and logo to what services to offer. You just choose what fits.",
  },
  {
    question: "Is this a subscription or a one-time purchase?",
    answer:
      "Right now it's a one-time purchase for the full brand kit. No subscriptions, no hidden fees.",
  },
  {
    question: "Can I edit or customize the results?",
    answer:
      "Yes! You can choose your favorite options and make changes to your brand name, logo style, and more before finalizing.",
  },
  {
    question: "Do you offer a website too?",
    answer:
      "Not yet — our focus right now is giving you everything you need to launch your brand. A website builder is coming soon!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600 opacity-20 blur-2xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">FAQs</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Got questions? We’ve got answers. Here’s everything you need to know
          before getting started.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-800 rounded-lg bg-[rgba(255,255,255,0.02)] backdrop-blur-md transition hover:border-purple-600"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-5 flex justify-between items-center text-lg font-medium text-gray-200"
            >
              {faq.question}
              <span className="text-purple-400 text-xl">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-5 text-gray-400 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
