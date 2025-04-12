"use client";

interface Props {
  currentView: "kit" | "flyer";
  onTabChange: (view: "kit" | "flyer") => void;
}

export default function BrandKitTabs({ currentView, onTabChange }: Props) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex bg-zinc-900 border border-zinc-700 rounded-full p-1">
        {[
          { label: "Brand Kit", key: "kit" },
          { label: "Flyer Preview", key: "flyer" },
        ].map(({ label, key }) => {
          const isActive = currentView === key;
          return (
            <button
              key={key}
              onClick={() => onTabChange(key as "kit" | "flyer")}
              className={`text-sm px-5 py-1.5 font-medium rounded-full transition-colors cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
