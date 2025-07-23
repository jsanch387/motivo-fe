"use client";
import Button from "@/app/components/ui/Button";
import { ROUTES } from "@/lib/constants/routes";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  UserGroupIcon,
  ClockIcon, // Changed from RocketLaunchIcon to better represent time
  SparklesIcon, // Changed from TrophyIcon for a more relevant metric
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative isolate py-24 sm:py-32">
      {/* Removed: Background elements (relying on SiteBackground for global background) */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-[100px]" />
      </div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What creators are saying
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Hear from creators who are already transforming their knowledge into
            valuable products.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: UserGroupIcon,
                value: "100+", // Adjusted for a more realistic beta number
                label: "Creators served",
                color: "text-indigo-600",
              },
              {
                icon: ClockIcon, // Changed icon for time
                value: "Approx. 1 Week", // Updated to reflect manual delivery time
                label: "Bundle delivery time",
                color: "text-purple-600",
              },
              {
                icon: SparklesIcon, // Changed icon
                value: "5-Star", // Simple rating
                label: "Average feedback",
                color: "text-fuchsia-600",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-slate-200/50 ${stat.color}`}
                >
                  <stat.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-24 sm:mt-32">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {[
                {
                  name: "Jessica L.",
                  role: "Skincare Influencer",
                  avatar: "JL",
                  quote:
                    "I got a full PDF guide on 'Managing Oily Skin' for my followers, and it was so professionally done! It saved me weeks of work.",
                  stars: 5,
                },
                {
                  name: "David C.",
                  role: "Budgeting Expert",
                  avatar: "DC",
                  quote:
                    "The custom budgeting checklist and calendar were exactly what my audience needed. So easy to share and they loved the value!",
                  stars: 5,
                },
                {
                  name: "Chloe M.",
                  role: "Fitness Coach",
                  avatar: "CM",
                  quote:
                    "I always wanted to create a workout routine guide but never had the time. This service delivered a perfect one, ready for my community.",
                  stars: 5,
                },
                {
                  name: "Alex P.",
                  role: "Plant Care Enthusiast",
                  avatar: "AP",
                  quote:
                    "Received a detailed Bonsai care guide and a watering schedule. It's fantastic to have a tangible product to offer my plant-loving audience.",
                  stars: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/50"
                >
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-medium">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.stars
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-slate-600">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Removed: Logo cloud (Featured in) section */}

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
              Trusted by creators across various niches
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
