"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
      "Not at the moment — you can preview everything before finalizing, but editing the kit after purchase isn't supported yet.",
  },
  {
    question: "Do you offer a website too?",
    answer:
      "Not yet. Our focus is on giving you everything you need to launch fast. Website tools are coming soon!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] bg-purple-500 opacity-10 blur-[100px] rounded-full" />
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">FAQs</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Got questions? We’ve got answers. Here&#39;s everything you need to
          know before getting started.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="border border-gray-800 bg-[rgba(255,255,255,0.02)] backdrop-blur-md rounded-xl transition hover:border-purple-600"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center text-left px-5 py-4 text-white text-base sm:text-lg font-medium transition"
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-purple-400 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`px-5 pb-5 text-sm text-gray-400 transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
