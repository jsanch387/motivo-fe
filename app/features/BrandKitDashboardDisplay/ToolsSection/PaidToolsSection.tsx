"use client";

import { useState } from "react";
import ToolTabs from "./ToolTabs";
import ToolCardView from "./ToolCardView";
import { Tool } from "../../Onboarding/types/brandKit.type";

interface Props {
  user_tools: Tool[];
  suggested_tools: Tool[];
}

export default function PaidToolsSection({
  user_tools,
  suggested_tools,
}: Props) {
  const hasUserTools = user_tools.length > 0;
  const hasSuggestedTools = suggested_tools.length > 0;

  const [tab, setTab] = useState<"user" | "ai">(hasUserTools ? "user" : "ai");

  const activeTools = tab === "user" ? user_tools : suggested_tools;

  const helperText =
    tab === "user"
      ? "These are the tools you’ve added to your kit."
      : hasUserTools
      ? "These tools can help improve your workflow and efficiency."
      : "Here are some tools we recommend to get you started.";

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Tabs + helper */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="space-y-2">
            <ToolTabs
              activeTab={tab}
              onTabChange={hasUserTools ? setTab : () => {}}
              showUserTab={hasUserTools}
              showAiTab={hasSuggestedTools}
            />
            <p className="text-sm text-gray-400 max-w-lg">{helperText}</p>
          </div>
        </div>

        <ul className="divide-y divide-zinc-800 border border-zinc-800 rounded-lg overflow-hidden max-h-[280px] overflow-y-auto custom-scrollbar">
          {activeTools.map((tool, i) => (
            <ToolCardView key={`${tab}-${i}`} tool={tool} />
          ))}
        </ul>
      </div>
    </section>
  );
}
