"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/ui/Button";
import { generateFromAI } from "../../api/generateFromAI";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import OnboardingCard from "../OnboardingCard";
import { OnboardingData } from "../../types/onboarding.type";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

export default function Step3({ initialData, onNext, onUpdate }: Props) {
  const hasFetchedRef = useRef(false);
  const [palettes, setPalettes] = useState<string[][]>(
    initialData.brand_color_options || []
  );

  const [selectedIdx, setSelectedIdx] = useState<number | null>(() => {
    const idx = initialData.brand_color_options?.findIndex(
      (p) =>
        JSON.stringify(p) === JSON.stringify(initialData.selected_color_palette)
    );
    return idx !== undefined && idx !== -1 ? idx : null;
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const shouldFetch = !hasFetchedRef.current && palettes.length === 0;
    if (shouldFetch) {
      hasFetchedRef.current = true;
      fetchPalettes();
    }
  }, []);

  const fetchPalettes = async () => {
    setLoading(true);
    try {
      const result = await generateFromAI<string[][]>("brand_colors");
      setPalettes(result);
      onUpdate({ brand_color_options: result });
    } catch (err) {
      console.error("❌ Failed to fetch palettes:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = async () => {
    if (selectedIdx === null) return;
    const selectedPalette = palettes[selectedIdx];

    const hasChanged =
      JSON.stringify(initialData.selected_color_palette) !==
        JSON.stringify(selectedPalette) ||
      JSON.stringify(initialData.brand_color_options) !==
        JSON.stringify(palettes);

    const updated = {
      brand_color_options: palettes,
      selected_color_palette: selectedPalette,
      current_step: 4,
    };

    onUpdate(updated);

    if (hasChanged) {
      const merged: OnboardingData = {
        ...(initialData as OnboardingData),
        ...updated,
      };
      await saveOnboardingProgress(merged);
    }

    onNext();
  };

  return (
    <OnboardingCard
      title="Choose your brand colors"
      subtext="Select a color set that fits your brand's personality and aesthetic."
    >
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[200px]">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent mb-4 rounded-full" />
          <p className="text-white">Generating brand colors...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {palettes.map((palette, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`cursor-pointer rounded-xl border transition p-4 space-y-2 ${
                  selectedIdx === idx
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-700 hover:border-blue-500"
                }`}
              >
                <div className="flex gap-2 justify-center">
                  {palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-zinc-800"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-right">
            <Button
              type="primary"
              size="lg"
              onClick={handleContinue}
              disabled={selectedIdx === null}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </OnboardingCard>
  );
}
