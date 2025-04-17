"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

export default function Card({
  title,
  children,
  className = "",
  padded = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        "bg-zinc-900 border border-zinc-800 rounded-xl",
        padded ? "px-4 py-6 sm:px-6 sm:py-8" : "",
        className
      )}
    >
      {title && (
        <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}
