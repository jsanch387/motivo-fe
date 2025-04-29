"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  subtext?: string;
  children: ReactNode;
  className?: string;
  showDivider?: boolean; // 🔹 optional prop
};

export default function OnboardingCard({
  title,
  subtext,
  children,
  className = "",
  showDivider = true,
}: Props) {
  return (
    <div
      className={clsx(
        "w-full mx-auto rounded-xl px-4 py-5 sm:px-6 sm:py-7",
        "bg-transparent border-0 sm:bg-zinc-900 sm:border sm:border-zinc-800",
        className
      )}
    >
      {title && (
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
          {title}
        </h2>
      )}
      {subtext && (
        <p className="text-gray-400 text-sm mb-4 max-w-2xl">{subtext}</p>
      )}

      {showDivider && <div className="border-t border-zinc-800 mb-6" />}
      {children}
    </div>
  );
}
