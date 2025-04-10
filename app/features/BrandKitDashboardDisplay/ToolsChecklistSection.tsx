"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

interface Tool {
  name: string;
  checked: boolean;
  source: "user" | "ai";
}

interface Props {
  tools: Tool[];
}

export default function ToolsChecklistSection({ tools }: Props) {
  const userTools = tools.filter((t) => t.source === "user");
  const recommendedTools = tools.filter((t) => t.source === "ai");

  const [activeTab, setActiveTab] = useState<"your" | "recommended">("your");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveTab("your")}
          className={`text-sm px-3 py-1 rounded-md ${
            activeTab === "your"
              ? "bg-zinc-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Your Tools
        </button>
        <button
          onClick={() => setActiveTab("recommended")}
          className={`text-sm px-3 py-1 rounded-md ${
            activeTab === "recommended"
              ? "bg-zinc-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Recommended Tools
        </button>
      </div>

      {/* Scrollable Tool List */}
      <div className="max-h-[260px] overflow-y-auto border border-zinc-800 rounded-lg divide-y divide-zinc-800 custom-scrollbar">
        {(activeTab === "your" ? userTools : recommendedTools).map(
          (tool, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-4 py-3 text-sm"
            >
              <div className="flex items-center gap-2">
                {activeTab === "your" ? (
                  <CheckIcon className="w-4 h-4 text-green-400" />
                ) : (
                  <SparklesIcon className="w-4 h-4 text-amber-300" />
                )}
                <span>{tool.name}</span>
              </div>
              {activeTab === "recommended" && (
                <span className="text-xs text-blue-400 bg-zinc-800 px-2 py-1 rounded-md">
                  Suggested
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
