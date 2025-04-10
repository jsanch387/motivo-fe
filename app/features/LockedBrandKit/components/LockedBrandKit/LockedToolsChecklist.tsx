"use client";

import { BrandTool } from "../../../Onboarding/types/brandKit.type";

interface Props {
  tools: BrandTool[];
}

export default function LockedToolsChecklist({ tools }: Props) {
  const userTools = tools.filter((tool) => tool.source === "user");
  const aiTools = tools.filter((tool) => tool.source === "ai").slice(0, 2);

  const totalVisible = userTools.length + aiTools.length;
  const blurredPlaceholdersCount = Math.max(0, 8 - totalVisible);
  const blurredPlaceholders = Array.from({ length: blurredPlaceholdersCount });

  return (
    <div>
      <h4 className="text-white font-bold text-lg mb-2">Tools & Checklist</h4>
      <p className="text-sm text-gray-400 mb-4">
        Heres your starter gear. Unlock the rest of the list for a complete
        setup.
      </p>

      <ul className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden max-h-[240px] overflow-y-auto custom-scrollbar">
        {/* User tools */}
        {userTools.map((tool, i) => (
          <li
            key={`user-${i}`}
            className="px-4 py-3 bg-zinc-900 text-sm text-white flex items-center justify-between"
          >
            <span>{tool.name}</span>
            {tool.checked && <span className="text-green-500 text-xs">✔</span>}
          </li>
        ))}

        {/* AI suggestions (limited to 2) */}
        {aiTools.map((tool, i) => (
          <li
            key={`ai-${i}`}
            className="px-4 py-3 bg-zinc-900 text-sm text-white flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              {tool.name}
              <span className="text-[10px] bg-blue-700 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                Suggested
              </span>
            </span>
          </li>
        ))}

        {/* Blurred locked placeholders */}
        {blurredPlaceholders.map((_, i) => (
          <li
            key={`placeholder-${i}`}
            className="px-4 py-3 bg-zinc-900 text-sm text-gray-500 blur-sm select-none"
          >
            🔒 Unlock more tool recommendations
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 mt-2">
        Upgrade to unlock expert tool tips and your full checklist.
      </p>
    </div>
  );
}
