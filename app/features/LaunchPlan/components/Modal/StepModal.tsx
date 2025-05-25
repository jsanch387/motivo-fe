"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export default function StepModal({ open, onClose, title, children }: Props) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center sm:p-6">
      <div className="relative w-full max-w-lg bg-zinc-900 text-white shadow-xl sm:rounded-xl max-h-full sm:max-h-[90vh] sm:overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-zinc-800 px-4 sm:px-6 py-4">
          <h2 className="text-base sm:text-lg font-semibold leading-snug">
            {title ?? "Step Details"}
          </h2>
          <button onClick={onClose} aria-label="Close">
            <XMarkIcon className="w-5 h-5 text-zinc-400 hover:text-white cursor-pointer" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 sm:px-6 py-6 space-y-4 text-sm text-zinc-300 overflow-y-auto">
          {children ?? (
            <p className="text-zinc-400">Step instructions coming soon.</p>
          )}
        </div>

        {/* Optional sticky footer (uncomment if needed) */}
        {/* 
        <div className="sticky bottom-0 bg-zinc-900 px-4 sm:px-6 py-4 border-t border-zinc-800">
          <button className="w-full bg-violet-600 text-white py-2 rounded-xl text-sm font-medium">
            ✅ Mark Step Complete
          </button>
        </div> 
        */}
      </div>
    </div>
  );
}
