"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Mobile Auto Detailer",
      quote:
        "Motivo helped me go from zero to booked out in a week. The logo and website made my biz feel real. It’s like having a full team behind you.",
      emoji: "🚗",
      rating: 5,
    },
    {
      name: "Jasmine Lee",
      role: "Pet Grooming Side Hustler",
      quote:
        "I had no clue where to start — Motivo gave me everything I needed. The AI even picked a name better than what I had in mind.",
      emoji: "🐶",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      role: "Lawn Care Entrepreneur",
      quote:
        "The contracts saved me from hiring a lawyer. I signed my first paying customer within hours of using Motivo.",
      emoji: "🌿",
      rating: 5,
    },
  ];

  return (
    <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-10 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Glowing Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600 opacity-20 blur-2xl rounded-full" />
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          What Hustlers Are Saying
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Join the growing community of side hustlers using Motivo to launch
          faster, look professional, and get paid.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[rgba(255,255,255,0.03)] border border-transparent rounded-xl p-6 backdrop-blur-xl hover:border-blue-500 transition shadow-lg shadow-black/10"
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl">{t.emoji}</div>
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
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
