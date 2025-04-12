"use client";

import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function ServiceCardLocked() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-zinc-800/50 border border-dashed border-gray-700 rounded-xl text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <LockClosedIcon className="w-4 h-4 text-gray-500" />
        <span>Locked service suggestion</span>
      </div>
      <span className="text-xs text-gray-400">Upgrade to unlock</span>
    </div>
  );
}
