"use client";

import { useState } from "react";
import ToolTabs from "./ToolTabs";
import ToolCardView from "./ToolCardView";
import ToolCardLocked from "./ToolCardLocked";
import { Tool } from "@/app/features/Onboarding/types/brandKit.type";

interface Props {
  user_tools: Tool[];
  suggested_tools: Tool[];
  isLockedPreview?: boolean;
}

export default function ToolsSection({
  user_tools,
  suggested_tools,
  isLockedPreview = false,
}: Props) {
  const showUserTab = user_tools.length > 0;
  const showAiTab = suggested_tools.length > 0;

  const [tab, setTab] = useState<"user" | "ai">(showUserTab ? "user" : "ai");

  const visibleSuggested = isLockedPreview
    ? suggested_tools.slice(0, 2)
    : suggested_tools;

  const activeTools = tab === "user" ? user_tools : visibleSuggested;

  const lockedCount =
    isLockedPreview && tab === "ai"
      ? Math.max(0, 8 - visibleSuggested.length - user_tools.length)
      : 0;

  const helperText =
    tab === "user"
      ? "Here’s what you’ve added to your toolkit."
      : showUserTab
      ? "These tools can help you improve your workflow and offer more services."
      : "Here are some tools we recommend to get you started.";

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Top: Tabs + Helper Text */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="space-y-2">
            <ToolTabs
              activeTab={tab}
              onTabChange={setTab}
              showUserTab={showUserTab}
              showAiTab={showAiTab}
            />
            <p className="text-sm text-gray-400 max-w-lg">{helperText}</p>
          </div>
        </div>

        {/* Tool list */}
        <ul className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden max-h-[280px] overflow-y-auto custom-scrollbar">
          {activeTools.map((tool, i) => (
            <ToolCardView key={`${tab}-${i}`} tool={tool} />
          ))}

          {isLockedPreview &&
            tab === "ai" &&
            Array.from({ length: lockedCount }).map((_, i) => (
              <ToolCardLocked key={`locked-${i}`} />
            ))}
        </ul>
      </div>
    </section>
  );
}
