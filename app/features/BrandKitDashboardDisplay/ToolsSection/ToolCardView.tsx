// ToolCardView.tsx
"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

interface Tool {
  name: string;
  checked: boolean;
  source: "user" | "ai";
}

interface Props {
  tool: Tool;
}

export default function ToolCardView({ tool }: Props) {
  return (
    <li className="px-4 py-3 bg-zinc-900 text-sm text-white flex items-center justify-between">
      <div className="flex items-center gap-2">
        {tool.source === "user" && tool.checked && (
          <CheckIcon className="w-4 h-4 text-green-400" />
        )}
        {tool.source === "ai" && (
          <SparklesIcon className="w-4 h-4 text-yellow-300" />
        )}
        <span>{tool.name}</span>
      </div>

      {tool.source === "ai" && (
        <span className="text-xs text-blue-400 bg-zinc-800 px-2 py-1 rounded-md">
          Suggested
        </span>
      )}
    </li>
  );
}
