"use client";

import Button from "@/app/components/ui/Button";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { purchaseBrandKit } from "../../../Onboarding/api/purchaseBrandKit";

export default function LockedKitFooter() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      const url = await purchaseBrandKit();
      window.location.href = url;
    } catch (err) {
      console.error("❌ Failed to purchase brand kit", err);
      alert("Something went wrong. Try again.");
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
            Unlock your full Brand Kit
          </h4>
          <p className="text-sm sm:text-base text-gray-400">
            Get access to your logo, color palette, flyer PDF, bonus services,
            and tool recommendations — all editable after unlocking.
          </p>
        </div>

        {/* Button */}
        <Button size="lg" onClick={handlePurchase} disabled={loading}>
          {loading ? "Unlocking..." : "Unlock Brand Kit – $29"}
        </Button>

        {/* Confirmation message */}
        {success && (
          <p className="text-green-400 text-sm font-medium">
            🎉 Brand Kit unlocked!
          </p>
        )}

        {/* Disclaimer */}
        <div className="flex items-start justify-center text-gray-500 text-xs sm:text-sm gap-2 max-w-md mx-auto">
          <ExclamationTriangleIcon className="h-4 w-4 text-yellow-400 mt-[2px]" />
          <p>
            Your brand kit will be stored for{" "}
            <span className="text-white font-semibold">24 hours</span>. After
            that, it may be deleted to free up space for new users.
          </p>
        </div>
      </div>
    </div>
  );
}
