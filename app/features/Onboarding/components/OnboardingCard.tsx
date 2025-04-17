// app/features/BrandKitOnboard/components/OnboardingCard.tsx
"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  subtext?: string;
  children: ReactNode;
  className?: string;
};

export default function OnboardingCard({
  title,
  subtext,
  children,
  className = "",
}: Props) {
  return (
    <div
      className={clsx(
        "w-full mx-auto bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8",
        className
      )}
    >
      <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
        {title}
      </h2>
      {subtext && (
        <p className="text-gray-400 text-sm mb-6 max-w-2xl">{subtext}</p>
      )}
      {children}
    </div>
  );
}
