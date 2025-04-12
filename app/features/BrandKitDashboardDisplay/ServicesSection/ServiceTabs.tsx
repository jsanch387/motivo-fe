"use client";

interface Props {
  activeTab: "user" | "ai";
  setActiveTab: (tab: "user" | "ai") => void;
  showUserTab: boolean;
  showAiTab: boolean;
}

export default function ServiceTabs({
  activeTab,
  setActiveTab,
  showUserTab,
  showAiTab,
}: Props) {
  return (
    <div className="flex gap-3">
      {showUserTab && (
        <button
          onClick={() => setActiveTab("user")}
          className={`text-sm px-4 py-1.5 rounded-md border transition ${
            activeTab === "user"
              ? "bg-blue-900 border-blue-500 text-white shadow-md"
              : "border-zinc-700 text-gray-400 hover:text-white"
          }`}
        >
          Your Services
        </button>
      )}
      {showAiTab && (
        <button
          onClick={() => setActiveTab("ai")}
          className={`text-sm px-4 py-1.5 rounded-md border transition ${
            activeTab === "ai"
              ? "bg-blue-900 border-blue-500 text-white shadow-md"
              : "border-zinc-700 text-gray-400 hover:text-white"
          }`}
        >
          Recommended Services
        </button>
      )}
    </div>
  );
}
