"use client";

import FacebookIcon from "@/lib/icons/FacebookIcon";
import { ExternalLinkIcon, UploadCloud } from "lucide-react";

export default function CreateProfileStep() {
  return (
    <div className="space-y-6">
      {/* Header with centered Facebook icon */}
      <div className="rounded-xl bg-zinc-800/50 p-5 border border-zinc-700">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500/10 p-2 rounded-lg">
            <FacebookIcon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">
              Facebook Business Page Setup
            </h3>
            <p className="text-zinc-300 text-sm">
              Follow these steps to create your business page
            </p>
          </div>
        </div>
      </div>

      {/* Steps with proper spacing */}
      <div className="space-y-5">
        <StepItem
          number={1}
          title="Go to Facebook Page Creator"
          href="https://facebook.com/pages/create"
          description="Create a new page for your business"
        />

        <StepItem
          number={2}
          title="Select Business or Brand"
          description="Select the business option"
        />

        <StepItem
          number={3}
          title="Enter your business name"
          description="Use your official business name"
        />

        <StepItem
          number={4}
          title="Select category"
          description="Choose the category for your business"
        />

        <StepItem
          number={5}
          title="Upload your logo"
          icon={<UploadCloud className="w-4 h-4 text-blue-400" />}
          description="Click the upload button"
        />
      </div>
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
  href,
}: {
  number: number;
  title: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center text-blue-400 text-xs font-medium">
          {number}
        </div>
        {number < 5 && <div className="w-px h-8 bg-zinc-700 mt-1"></div>}
      </div>

      <div className="pb-1">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors"
          >
            {title}
            <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
          </a>
        ) : (
          <p className="text-white">{title}</p>
        )}

        {description && (
          <div className="mt-1.5 text-sm text-zinc-400">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
