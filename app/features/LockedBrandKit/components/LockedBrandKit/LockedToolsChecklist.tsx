"use client";

import { useState } from "react";
import { Tool } from "../../../Onboarding/types/brandKit.type";
import {
  SparklesIcon,
  LockClosedIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

interface Props {
  user_tools: Tool[];
  suggested_tools: Tool[];
}

export default function LockedToolsChecklist({
  user_tools,
  suggested_tools,
}: Props) {
  const [tab, setTab] = useState<"user" | "ai">(
    user_tools.length > 0 ? "user" : "ai"
  );

  const visibleSuggested = suggested_tools.slice(0, 2);
  const lockedCount = 8 - visibleSuggested.length;

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">
        Tools & Checklist
      </h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Top: Tabs + Helper Text */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="space-y-2">
            <div className="flex gap-3">
              {user_tools.length > 0 && (
                <button
                  onClick={() => setTab("user")}
                  className={`text-sm px-4 py-1.5 rounded-md border transition ${
                    tab === "user"
                      ? "bg-blue-900 border-blue-500 text-white shadow-md"
                      : "border-zinc-700 text-gray-400 hover:text-white"
                  }`}
                >
                  Your Tools
                </button>
              )}
              {suggested_tools.length > 0 && (
                <button
                  onClick={() => setTab("ai")}
                  className={`text-sm px-4 py-1.5 rounded-md border transition ${
                    tab === "ai"
                      ? "bg-blue-900 border-blue-500 text-white shadow-md"
                      : "border-zinc-700 text-gray-400 hover:text-white"
                  }`}
                >
                  Recommended Tools
                </button>
              )}
            </div>

            <p className="text-sm text-gray-400 max-w-lg">
              {tab === "user"
                ? "Here’s what you’ve added to your toolkit."
                : "These tools can help you improve your workflow and offer more services."}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tab === "user" &&
            user_tools.map((tool, i) => (
              <div
                key={`user-${i}`}
                className="relative bg-zinc-900 border border-gray-700 rounded-xl px-4 py-3 text-white flex justify-between items-center"
              >
                <p className="font-medium">{tool.name}</p>

                {tool.checked && (
                  <CheckIcon className="w-5 h-5 text-green-400" />
                )}
              </div>
            ))}

          {tab === "ai" &&
            visibleSuggested.map((tool, i) => (
              <div
                key={`ai-${i}`}
                className="relative bg-zinc-900 border border-gray-700 rounded-xl px-4 py-3 text-white flex justify-between items-center"
              >
                <p className="font-medium">{tool.name}</p>
                <SparklesIcon className="w-5 h-5 text-yellow-300" />
              </div>
            ))}

          {/* 🔒 Locked placeholders (only on AI tab) */}
          {tab === "ai" &&
            Array.from({ length: lockedCount }).map((_, i) => (
              <div
                key={`locked-${i}`}
                className="flex items-center justify-between px-4 py-3 bg-zinc-800/50 border border-dashed border-gray-700 rounded-xl text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="w-4 h-4 text-gray-500" />
                  <span>Locked tool suggestion</span>
                </div>
                <span className="text-xs text-gray-400">Upgrade to unlock</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
