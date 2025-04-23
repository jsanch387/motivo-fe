// app/features/BrandKitDashboardDisplay/BusinessInfoCard.tsx

"use client";

import Image from "next/image";
import StyledSectionCard from "@/app/components/ui/StyledSectionCard";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

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
  const handleDownloadLogo = async () => {
    if (!logoUrl) return;

    try {
      const response = await fetch(logoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "motivo-logo.png"; // You can make this dynamic
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <StyledSectionCard>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Logo & Download */}
        <div className="relative w-30 h-30 flex-shrink-0 rounded-xl bg-zinc-800 border border-gray-700 overflow-hidden flex items-center justify-center">
          {logoUrl ? (
            <Image src={logoUrl} alt="Logo" fill className="object-contain" />
          ) : (
            <span className="text-gray-500 text-sm font-bold">LOGO</span>
          )}

          {/* Download Icon (floating corner) */}
          <button
            onClick={handleDownloadLogo}
            className="absolute bottom-1 right-1 p-1 rounded-full cursor-pointer bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-gray-300 hover:text-white transition"
            title="Download Logo"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Brand Info */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white">{name}</h2>
              {/* <p className="text-gray-400 text-sm italic mt-1">“{slogan}”</p> */}
              <p className="text-gray-300 text-sm mt-1">{serviceType}</p>
            </div>
            {/* <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
              <PencilIcon className="w-4 h-4" />
            </button> */}
          </div>
        </div>
      </div>
    </StyledSectionCard>
  );
}
