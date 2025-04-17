// app/features/BrandKitDashboardDisplay/BusinessInfoCard.tsx

"use client";

import Image from "next/image";
import StyledSectionCard from "@/app/components/ui/StyledSectionCard";
import { ArrowDownTrayIcon, PencilIcon } from "@heroicons/react/24/outline";

interface Props {
  name: string;
  slogan: string;
  serviceType: string;
  logoUrl: string;
}

export default function BusinessInfoCard({
  name,
  slogan,
  serviceType,
  logoUrl,
}: Props) {
  return (
    <StyledSectionCard>
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-zinc-800 border border-gray-700 overflow-hidden">
          {logoUrl ? (
            <Image src={logoUrl} alt="Logo" fill className="object-contain " />
          ) : (
            <span className="text-gray-500 text-sm font-bold flex justify-center items-center h-full">
              LOGO
            </span>
          )}
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
    </StyledSectionCard>
  );
}
