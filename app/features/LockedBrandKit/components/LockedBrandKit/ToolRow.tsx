"use client";

export type ToolRowProps = {
  name: string;
  checked?: boolean;
  locked?: boolean;
  tag?: string;
};

export function ToolRow({
  name,
  checked = false,
  locked = false,
  tag,
}: ToolRowProps) {
  const status = checked ? "✅" : locked ? "🔒" : "⬜️";

  return (
    <li
      className={`flex justify-between items-center px-4 py-3 text-sm ${
        locked ? "bg-zinc-800 text-gray-500" : "bg-zinc-900 text-white"
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{status}</span>
        <span>{name}</span>
        {locked && tag && (
          <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs font-medium ml-2">
            {tag}
          </span>
        )}
      </div>
    </li>
  );
}
