"use client";
import { CheckCircleIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  index: number;
  title: string;
  description: string;
  action: string;
  isComplete: boolean;
  onClick: () => void;
}

export default function LaunchStepCard({
  index,
  title,
  description,
  action,
  isComplete,
  onClick,
}: Props) {
  return (
    <li
      className={`p-4 rounded-lg border transition-colors  ${
        isComplete
          ? "bg-zinc-900/50 border-zinc-700"
          : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
      }`}
    >
      <button onClick={onClick} className="w-full text-left cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex items-start gap-3 flex-1">
            {isComplete ? (
              <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            ) : (
              <div className="w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center text-xs text-zinc-500 flex-shrink-0 mt-1">
                {index + 1}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium leading-snug">{title}</h3>
              <p className="text-zinc-400 text-sm mt-1 leading-tight">
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end sm:justify-start">
            <span className="text-violet-400 text-sm mr-1 whitespace-nowrap">
              {action}
            </span>
            <ChevronRightIcon className="w-4 h-4 text-violet-400" />
          </div>
        </div>
      </button>
    </li>
  );
}
