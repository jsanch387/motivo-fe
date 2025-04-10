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
        "bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded-xl shadow-sm backdrop-blur-sm",
        padded ? "p-6" : "",
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
