"use client";

import { useState } from "react";
import ToolTabs from "./ToolTabs";
import ToolCardView from "./ToolCardView";
import ToolCardLocked from "./ToolCardLocked";
import { Tool } from "../../Onboarding/types/brandKit.type";

interface Props {
  user_tools: Tool[];
  suggested_tools: Tool[];
}

export default function LockedToolsSection({
  user_tools,
  suggested_tools,
}: Props) {
  const hasUserTools = user_tools.length > 0;
  const [tab, setTab] = useState<"user" | "ai">(hasUserTools ? "user" : "ai");

  const isAiTab = tab === "ai";
  const visibleTools = isAiTab ? suggested_tools : user_tools;
  const lockedCount = isAiTab ? Math.max(0, 8 - suggested_tools.length) : 0;

  const helperText = isAiTab
    ? "These are a few tools we recommend to get you started."
    : "These are the tools you’ve added to your kit.";

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Tabs and helper */}
        <div className="mb-4">
          <ToolTabs
            activeTab={tab}
            onTabChange={hasUserTools ? setTab : () => {}}
            showUserTab={hasUserTools}
            showAiTab
          />
          <p className="text-sm text-gray-400 mt-3">{helperText}</p>
        </div>

        {/* Tools list */}
        <ul className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden max-h-[280px] overflow-y-auto custom-scrollbar">
          {visibleTools.map((tool, i) => (
            <ToolCardView
              key={`${tab}-${i}`}
              tool={{
                ...tool,
                source: tool.source || (isAiTab ? "ai" : "user"), // 🚨 FORCE source to exist
              }}
            />
          ))}

          {isAiTab &&
            Array.from({ length: lockedCount }).map((_, i) => (
              <ToolCardLocked key={`locked-${i}`} />
            ))}
        </ul>
      </div>
    </section>
  );
}
