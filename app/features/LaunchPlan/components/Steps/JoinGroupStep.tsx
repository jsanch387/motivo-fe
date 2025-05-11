"use client";

import FacebookIcon from "@/lib/icons/FacebookIcon";

interface Group {
  name: string;
  members: string;
  url: string;
  tip: string;
}

// ✅ props are passed from LaunchChecklist → backend AI data
interface JoinGroupsStepProps {
  groups?: Group[]; // optional in case of no data yet
}

export default function JoinGroupsStep({ groups }: JoinGroupsStepProps) {
  return (
    <div className="space-y-6">
      {/* Value proposition */}
      <div className="rounded-xl bg-zinc-800/50 p-5 border border-zinc-700">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-500/10 p-2 rounded-lg">
            <FacebookIcon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              Why join Facebook groups?
            </h3>
            <p className="text-zinc-300 text-sm">
              The fastest way to get your first customers
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-zinc-300 pl-2">
          <p>
            <span className="font-medium text-white">Local groups work:</span>{" "}
            People in these groups are actively looking for services and trust
            recommendations from their neighbors.
          </p>
          <p>
            <span className="font-medium text-white">It’s free marketing:</span>{" "}
            You can reach hundreds of potential customers without spending money
            on ads.
          </p>
          <p>
            <span className="font-medium text-white">Build reputation:</span>{" "}
            Regular helpful posts establish you as the local expert in your
            field.
          </p>
        </div>
      </div>

      {/* Groups list */}
      <div className="space-y-4">
        <h4 className="text-white font-medium text-sm">
          Suggested groups to join:
        </h4>

        {/* ✅ fallback in case groups are empty */}
        {groups && groups.length > 0 ? (
          groups.map((group, i) => (
            <div
              key={i}
              className="rounded-lg bg-zinc-900/40 p-4 border border-zinc-700 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-medium">{group.name}</h4>
                  <p className="text-zinc-400 text-sm mt-1">{group.members}</p>
                </div>
                <span className="text-xs bg-blue-900/20 text-blue-400 px-2 py-1 rounded">
                  Facebook
                </span>
              </div>

              <div className="mt-3 flex gap-2">
                <svg
                  className="w-4 h-4 text-yellow-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                </svg>
                <p className="text-xs text-zinc-300">{group.tip}</p>
              </div>

              <a
                href={group.url}
                target="_blank"
                className="mt-3 inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Join group
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))
        ) : (
          <p className="text-zinc-400 text-sm">
            No suggestions yet. Open this step again later to generate ideas.
          </p>
        )}
      </div>
    </div>
  );
}
