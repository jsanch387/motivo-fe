"use client";

const features = [
  {
    icon: "💡",
    title: "Business Name Ideas",
    description:
      "Get unique, catchy name suggestions powered by AI. Instantly brandable and tailored to your business.",
  },
  {
    icon: "🎨",
    title: "Logo & Brand Colors",
    description:
      "We generate a modern logo and color palette that reflects your style — no design skills needed.",
  },
  {
    icon: "📋",
    title: "Services & Pricing",
    description:
      "We'll help you decide what to offer and how to price it. Launch with clarity and confidence.",
  },
  {
    icon: "📢",
    title: "Promo Flyer for Socials",
    description:
      "Get a clean, ready-to-post flyer to announce your new business on Instagram, Stories, and more.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="relative z-10 px-6 sm:px-10 lg:px-20 py-24 bg-[color:var(--background)] text-[color:var(--foreground)]">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-600 opacity-20 blur-2xl rounded-full" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          What You Get with Motivo
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your all-in-one starter kit — from your business name to your launch
          flyer. Everything you need to start today.
        </p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded-xl p-6 backdrop-blur-md hover:shadow-lg transition hover:border-purple-600"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
