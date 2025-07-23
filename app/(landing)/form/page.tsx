// app/(landing)/form/page.tsx
import { Metadata } from "next";
import SiteBackground from "../../features/landing/SiteBackground"; // Assuming this path is correct
import {
  ClipboardDocumentIcon,
  SparklesIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline"; // Icons for steps
import ProductRequestForm from "@/app/features/ProductRequestForm/ProductRequestForm";

export const metadata: Metadata = {
  title: "Request Your Free Digital Product Bundle",
  description:
    "Fill out our form to get a custom-made digital product bundle (guide, checklist, calendar) tailored to your niche, absolutely free.",
};

export default function FormPage() {
  return (
    <SiteBackground>
      <section className="relative isolate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get Your FREE Custom Digital Product Bundle
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              It&apos;s simple: tell us about your expertise, and we&apos;ll do
              the heavy lifting to create a ready-to-sell bundle for you.
            </p>
          </div>

          {/* Steps Section */}
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  icon: ClipboardDocumentIcon,
                  title: "1. Share Your Vision",
                  description:
                    "Fill out the form below with your email, niche, and the top questions your audience asks. This helps us understand your unique needs.",
                  color: "text-indigo-600",
                },
                {
                  icon: SparklesIcon,
                  title: "2. We Craft Your Bundle",
                  description:
                    "Our team will custom-design a professional PDF guide, a complementary checklist, and a strategic calendar/routine. All tailored to your input.",
                  color: "text-purple-600",
                },
                {
                  icon: DocumentTextIcon,
                  title: "3. Receive & Monetize",
                  description:
                    "We&apos;ll email you direct Google Docs links to your editable bundle. It&apos;s ready for you to customize, brand, and start selling or sharing with your audience!",
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
          </div>

          {/* Product Request Form */}
          <div className="mx-auto mt-16 max-w-lg">
            <ProductRequestForm
              title="Ready to Get Started?"
              subtitle="Fill out the form below and we'll begin crafting your personalized digital product bundle. Expect delivery within about a week."
              buttonText="Request My FREE Bundle"
            />
          </div>
        </div>
      </section>
    </SiteBackground>
  );
}
