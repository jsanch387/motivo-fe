"use client";

export type ServiceCardProps = {
  title: string;
  price: string;
  source?: "user" | "ai";
  locked?: boolean;
  blurPrice?: boolean;
};

export function ServiceCard({
  title,
  price,
  source = "user",
  locked = false,
  blurPrice = false,
}: ServiceCardProps) {
  const isSuggested = source === "ai" && !locked;

  return (
    <div
      className={`relative rounded-lg border transition px-4 py-3 h-14 flex items-center justify-between ${
        locked
          ? "border-zinc-800 bg-zinc-800 text-gray-500"
          : "border-zinc-700 bg-zinc-900 text-white"
      }`}
    >
      <div className="flex flex-col justify-center">
        <span
          className={`font-semibold truncate ${
            isSuggested ? "text-gray-300" : "text-white"
          }`}
        >
          {locked ? "🔒 Locked Suggestion" : title}
        </span>
        {isSuggested && (
          <span className="text-xs text-gray-500">Suggested</span>
        )}
      </div>

      <span
        className={`text-lg font-bold ${
          blurPrice ? "text-gray-400 blur-sm select-none" : ""
        }`}
      >
        {locked ? "$" : price}
      </span>
    </div>
  );
}
