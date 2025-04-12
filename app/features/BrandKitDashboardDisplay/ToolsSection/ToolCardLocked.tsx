// ToolCardLocked.tsx
"use client";

import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function ToolCardLocked() {
  return (
    <li className="px-4 py-3 bg-zinc-800/50 text-sm text-gray-500 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LockClosedIcon className="w-4 h-4 text-gray-500" />
        <span>Locked tool suggestion</span>
      </div>
      <span className="text-xs text-gray-400">Upgrade to unlock</span>
    </li>
  );
}
