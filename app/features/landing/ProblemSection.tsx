"use client";

import Button from "@/app/components/ui/Button";
import { ROUTES } from "@/lib/constants/routes";
import { ArrowRightIcon } from "lucide-react";

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative isolate pb-24 sm:pb-32" // Removed bg-white and overflow-hidden (SiteBackground handles global overflow)
    >
      {/* Removed: Subtle grid background div */}
      {/* Removed: Glowing accent div */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            You&apos;ve built an audience. Now what?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Most creators struggle to turn their knowledge into products that
            actually sell.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Content ≠ Income", // Used HTML entity for not equal
                description:
                  "You post daily but the revenue isn&apos;t following",
                icon: (
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Blank Page Syndrome",
                description: "No idea where to start or what to include",
                icon: (
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Time Sink",
                description:
                  "Designing and structuring takes hours you don&apos;t have",
                icon: (
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pricing Paralysis",
                description: "No clue what to charge or how to position",
                icon: (
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50 transition-all hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-slate-900">
            We help you skip straight to the good part
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We&apos;ll transform your expertise into a ready-to-sell digital
            product &ndash; no design skills or blank page struggles required.
            Focus on your audience; we&apos;ll handle the creation.
          </p>
          <Button
            href={ROUTES.FORM}
            className="mt-8"
            icon={<ArrowRightIcon />}
            iconPosition="right"
          >
            Get Your Free Product Blueprint
          </Button>{" "}
        </div>
      </div>
    </section>
  );
}
