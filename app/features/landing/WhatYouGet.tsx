"use client";
import Button from "@/app/components/ui/Button";
import { ROUTES } from "@/lib/constants/routes";
import {
  BookOpenIcon,
  ClipboardDocumentCheckIcon, // Added for checklist
  CalendarDaysIcon, // Added for calendar/routine
  PencilSquareIcon, // Added for editable/ready-to-sell
  // Removed unused icons: DevicePhoneMobileIcon, BanknotesIcon, ChartBarIcon, Cog6ToothIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative isolate py-24 sm:py-32">
      {/* Removed: Background elements (relying on SiteBackground for global background) */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-[100px]" />
      </div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Here&apos;s exactly what you&apos;ll receive
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            A complete, custom-made digital product bundle, ready for you to
            share or sell to your audience.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left column - Features list */}
            <div className="space-y-8">
              {[
                {
                  icon: BookOpenIcon,
                  title: "Custom Niche Guide",
                  description:
                    "A professionally designed, in-depth PDF guide tailored to your audience's biggest questions, delivered as an editable Google Doc.",
                  color: "text-indigo-600",
                },
                {
                  icon: ClipboardDocumentCheckIcon, // New icon
                  title: "Actionable Checklist or To-Do List",
                  description:
                    "A ready-to-use checklist or to-do list template, complementing your guide, provided as an editable Google Doc.",
                  color: "text-purple-600",
                },
                {
                  icon: CalendarDaysIcon, // New icon
                  title: "Strategic Calendar or Routine",
                  description:
                    "A structured 30-day calendar or weekly routine template, designed to help your audience implement your advice, delivered as an editable Google Doc.",
                  color: "text-fuchsia-600",
                },
                {
                  icon: PencilSquareIcon, // New icon
                  title: "Fully Editable & Ready-to-Launch",
                  description:
                    "Receive direct Google Docs links, allowing you to easily customize, brand, and immediately share or sell your unique bundle.",
                  color: "text-indigo-600",
                },
                // Removed previous points like 'Mobile-Optimized Design', 'Pricing Strategy', 'Marketing Tips', 'Easy Customization'
                // as they are either covered by the new points or not direct deliverables of the free bundle.
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Image placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg rounded-xl bg-white p-8 shadow-lg ring-1 ring-slate-200/50">
                {/* Recommended image placeholder:
                  - A screenshot of the actual Google Doc template with some sample content
                  - Show the professional formatting with different heading levels
                  - Include callout annotations highlighting key features
                  - Make it look like a real product screenshot with subtle device mockup
                */}
                <Image
                  src="/landing-page.png"
                  alt="Template Preview"
                  className="rounded-lg"
                  layout="responsive"
                  width={750}
                  height={1280}
                />

                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                    <BookOpenIcon className="mr-2 h-4 w-4" />
                    Example: &quot;Monetization Beginner Guide&quot; Template
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className="mt-16 text-center">
            <Button
              href={ROUTES.FORM}
              className="mt-8"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              Claim Your Free Product Bundle
            </Button>
            <p className="mt-3 text-xs text-slate-500">
              Get started in minutes &bull; No technical skills needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
