"use client";

import clsx from "clsx";

interface SelectableTabProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function SelectableTab({
  label,
  selected,
  onClick,
}: SelectableTabProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "cursor-pointer px-5 py-4 rounded-xl border text-base font-medium transition text-center",
        selected
          ? "border-blue-500 bg-blue-500/10 text-blue-400"
          : "border-zinc-700 text-white hover:border-blue-500"
      )}
    >
      {label}
    </div>
  );
}
