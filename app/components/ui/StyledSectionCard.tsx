// app/components/ui/StyledSectionCard.tsx
"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function StyledSectionCard({ children, className = "" }: Props) {
  return (
    <div
      className={`bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8 ${className}`}
    >
      {children}
    </div>
  );
}
