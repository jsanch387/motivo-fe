"use client";
import Button from "@/app/components/ui/Button";
import { ROUTES } from "@/lib/constants/routes";
import {
  ClipboardDocumentIcon,
  SparklesIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate py-24 sm:py-32" // Removed bg-slate-50
    >
      {/* Removed: Background elements (relying on SiteBackground for global background) */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-[100px]" />
      </div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Turn your knowledge into profit in 3 simple steps
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We handle the heavy lifting while you focus on what you do best
            &ndash; creating.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                icon: ClipboardDocumentIcon,
                title: "Tell Us Your Needs",
                description:
                  "Share details about your niche, audience, and their biggest questions via our form.",
                color: "text-indigo-600",
              },
              {
                icon: SparklesIcon,
                title: "We Custom-Craft Your Bundle",
                description:
                  "Our team will design a professional PDF guide, checklist, and calendar/routine, tailored to your input. Expect delivery in about a week.",
                color: "text-purple-600",
              },
              {
                icon: DocumentTextIcon,
                title: "Receive & Launch",
                description:
                  "Get direct Google Docs links to your editable bundle. Customize, brand, and immediately share or sell to your audience!",
                color: "text-fuchsia-600",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200/50 ${step.color}`}
                >
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual connector (only on desktop) - Fixed arrow styling */}
          <div className="hidden lg:block">
            <div className="relative mt-10 flex items-center justify-center">
              {/* The connecting line */}
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-fuchsia-600/20"></div>
              {/* Arrows positioned along the line, correctly spaced */}
              <div className="relative z-10 flex w-full justify-center space-x-[calc(100%/3)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200/50">
                  <ArrowRightIcon className="h-5 w-5 text-slate-400" />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200/50">
                  <ArrowRightIcon className="h-5 w-5 text-slate-400" />
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
              Request Your Free Bundle
            </Button>

            <p className="mt-3 text-xs text-slate-500">
              No credit card required &bull; Free during beta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
