"use client";

import Button from "@/app/components/ui/Button";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { purchaseBrandKit } from "../../../Onboarding/api/purchaseBrandKit";

export default function LockedKitFooter() {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      const url = await purchaseBrandKit();
      window.location.href = url;
    } catch (err) {
      console.error("❌ Failed to purchase brand kit", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-gray-800 pt-12 mt-16 text-center px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Headline + Description */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xl sm:text-2xl">
            Upgrade to Full Brand Kit Access
          </h4>
          <p className="text-sm sm:text-base text-gray-400">
            Unlock all assets including high-res logos, color palettes, flyer,
            and premium tool and services recommendations.
          </p>
        </div>

        {/* Button */}
        <Button
          size="lg"
          onClick={handlePurchase}
          disabled={loading}
          className="mx-auto"
        >
          {loading ? "Processing..." : "Get Full Access – $19"}
        </Button>

        {/* Success message */}
        {success && (
          <p className="text-green-400 text-sm font-medium flex items-center justify-center gap-1">
            <ExclamationTriangleIcon className="h-4 w-4" />
            Brand Kit successfully unlocked!
          </p>
        )}
      </div>
    </div>
  );
}
