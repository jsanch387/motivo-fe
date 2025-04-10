"use client";

import Card from "@/app/components/ui/Card";
import { ArrowDownTrayIcon, PencilIcon } from "@heroicons/react/24/outline";

interface Props {
  name: string;
  slogan: string;
  serviceType: string;
  logoId: string;
}

export default function BusinessInfoCard({
  name,
  slogan,
  serviceType,
  logoId,
}: Props) {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-zinc-800 border border-gray-700 flex items-center justify-center">
          <span className="text-gray-500 text-sm font-bold">
            {logoId || "LOGO"}
          </span>
          <button
            className="absolute top-1 right-1 text-gray-500 hover:text-white transition"
            title="Download Logo"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              <p className="text-gray-400 text-sm italic mt-1">“{slogan}”</p>
              <p className="text-blue-400 text-sm mt-1">{serviceType}</p>
            </div>
            <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
              <PencilIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
