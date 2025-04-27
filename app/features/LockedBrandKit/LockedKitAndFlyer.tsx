"use client";

import { useState } from "react";
import BrandKitTabs from "../Onboarding/components/BrandKitTabs";
import LockedBrandKit from "./components/LockedBrandKit/LockedBrandKit";
import FlyerPreview from "../Onboarding/components/FlyerPreview";
import Button from "@/app/components/ui/Button";

import { BrandKit } from "../Onboarding/types/brandKit.type";

type Props = {
  brandKit: BrandKit;
  flyerUrl: string | null;
  flyerLoading?: boolean;
  flyerError?: boolean;
  onRetryFlyer?: () => void;
};

export default function LockedKitAndFlyer({
  brandKit,
  flyerUrl,
  flyerLoading,
  flyerError,
  onRetryFlyer,
}: Props) {
  const [view, setView] = useState<"kit" | "flyer">("kit");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
      {/* Tabs */}
      <BrandKitTabs currentView={view} onTabChange={setView} />

      {/* Content */}
      {view === "kit" ? (
        <LockedBrandKit brandKit={brandKit} />
      ) : flyerLoading ? (
        <div className="min-h-[300px] flex flex-col justify-center items-center text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-4" />
          <p className="text-gray-300 text-sm">Generating your flyer...</p>
        </div>
      ) : flyerUrl ? (
        <FlyerPreview flyerUrl={flyerUrl} />
      ) : flyerError ? (
        <div className="flex flex-col justify-center items-center space-y-4 text-center">
          <p className="text-red-500 text-sm">
            Failed to generate flyer. Please try again.
          </p>
          {onRetryFlyer && (
            <Button type="secondary" onClick={onRetryFlyer}>
              Retry Flyer
            </Button>
          )}
        </div>
      ) : (
        <p className="text-red-500 text-sm text-center">
          Could not load flyer preview.
        </p>
      )}
    </div>
  );
}
