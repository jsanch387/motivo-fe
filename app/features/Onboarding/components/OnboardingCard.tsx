// app/features/BrandKitOnboard/components/OnboardingCard.tsx
"use client";

import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function OnboardingCard({ title, children }: Props) {
  return (
    <div className="w-full mx-auto bg-gradient-to-b from-[#151a25] to-[#0f1117] border border-gray-800 rounded-2xl p-10 sm:p-12 lg:p-16 shadow-xl backdrop-blur-md">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 text-white leading-tight">
        {title}
      </h2>
      {children}
    </div>
  );
}
