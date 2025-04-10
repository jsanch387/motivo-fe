"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  type?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  href,
  children,
  type = "primary",
  size = "md",
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  const base =
    "font-semibold rounded-lg transition duration-200 ease-in-out cursor-pointer";

  const variant = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:brightness-110 shadow-md shadow-blue-500/30",
    secondary: "border border-gray-700 text-gray-200 hover:bg-gray-800",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base sm:text-lg px-8 py-4",
  };

  const combined = clsx(
    base,
    variant[type],
    sizes[size],
    className,
    disabled &&
      "opacity-50 cursor-not-allowed hover:brightness-100 hover:bg-none hover:border-gray-700"
  );

  if (href) {
    return (
      <Link href={href} className={combined} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combined} disabled={disabled}>
      {children}
    </button>
  );
}
