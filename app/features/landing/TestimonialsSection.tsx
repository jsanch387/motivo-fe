"use client";

import Card from "@/app/components/ui/Card";
import { StarIcon } from "@heroicons/react/20/solid";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Auto Detailing",
    quote:
      "Motivo helped me go from zero to booked out in a week. The logo and flyer made my business feel professional — clients took me seriously right away.",
    rating: 5,
  },
  {
    name: "Jasmine Lee",
    role: "Pet Grooming",
    quote:
      "I had no idea where to start, but Motivo guided me through everything. It even suggested a business name I ended up loving.",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    role: "Lawn Care",
    quote:
      "I didn’t know what tools I needed until Motivo gave me a full checklist. I launched fast without wasting time or money.",
    rating: 5,
  },
  {
    name: "Samantha Grant",
    role: "Cleaning Services",
    quote:
      "The brand kit made everything come together. From the name to the logo and flyer, I felt ready to start taking on clients with confidence.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-20 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Glowing Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-purple-500 opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-blue-600 opacity-10 blur-2xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
          What Hustlers Are Saying
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Join the growing community of side hustlers using Motivo to launch
          faster, look professional, and get paid.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, idx) => {
          const initials = t.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

          return (
            <Card key={idx}>
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm">
                  {initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-sm">{t.role}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 text-[15px] leading-relaxed italic">
                “{t.quote}”
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
