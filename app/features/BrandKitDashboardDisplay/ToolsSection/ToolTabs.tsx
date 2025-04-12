// ToolTabs.tsx
"use client";

interface ToolTabsProps {
  activeTab: "user" | "ai";
  onTabChange: (tab: "user" | "ai") => void;
  showUserTab: boolean;
  showAiTab: boolean;
}

export default function ToolTabs({
  activeTab,
  onTabChange,
  showUserTab,
  showAiTab,
}: ToolTabsProps) {
  return (
    <div className="flex gap-3">
      {showUserTab && (
        <button
          onClick={() => onTabChange("user")}
          className={`text-sm px-4 py-1.5 rounded-md border transition ${
            activeTab === "user"
              ? "bg-blue-900 border-blue-500 text-white shadow-md"
              : "border-zinc-700 text-gray-400 hover:text-white"
          }`}
        >
          Your Tools
        </button>
      )}
      {showAiTab && (
        <button
          onClick={() => onTabChange("ai")}
          className={`text-sm px-4 py-1.5 rounded-md border transition ${
            activeTab === "ai"
              ? "bg-blue-900 border-blue-500 text-white shadow-md"
              : "border-zinc-700 text-gray-400 hover:text-white"
          }`}
        >
          Recommended Tools
        </button>
      )}
    </div>
  );
}
