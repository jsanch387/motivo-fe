"use client";

import { ExternalLinkIcon, UploadCloud } from "lucide-react";

export default function CreateProfileStep() {
  return (
    <div className="space-y-6">
      {/* Header with centered Facebook icon */}
      <div className="flex gap-4">
        <div className="flex-shrink-0 pt-1">
          <div className="bg-blue-100/10 p-2 rounded-lg">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-semibold leading-tight">
            Facebook Business Page Setup
          </h4>
          <p className="text-zinc-400 text-sm mt-1">
            Follow these steps to create your business page
          </p>
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
