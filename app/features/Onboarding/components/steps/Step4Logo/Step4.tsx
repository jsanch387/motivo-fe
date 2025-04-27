"use client";

import { useState } from "react";
import { GetOnboardingResponse } from "../../../api/fetchOnboardingStatusWithData";
import { generateLogo } from "../../../api/generateLogo";
import { saveOnboardingProgress } from "../../../api/saveOnboardingProgress";
import { OnboardingData } from "../../../types/onboarding.type";
import OnboardingCard from "../../OnboardingCard";
import SelectedLogo from "./SelectedLogo";
import LogoStyleSelector from "./LogoStyleSelector";
import Button from "@/app/components/ui/Button";
import LogoLoadingSkeleton from "./LogoLoadingSkeleton";
import LogoPreviewGrid from "./LogoPreviewGrid";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

export default function Step4({ initialData, onNext, onUpdate }: Props) {
  const [selectedStyle, setSelectedStyle] = useState(
    initialData.selected_logo_style || ""
  );
  const [generatedLogos, setGeneratedLogos] = useState<string[]>(
    initialData.selected_logo_url ? [initialData.selected_logo_url] : []
  );
  const [selectedLogo, setSelectedLogo] = useState(
    initialData.selected_logo_url || ""
  );
  const [loading, setLoading] = useState(false);

  const hasExistingLogo = Boolean(initialData.selected_logo_url);
  const hasGenerated = generatedLogos.length > 0;

  const handleGenerate = async () => {
    if (!selectedStyle) return;
    setLoading(true);
    try {
      const logoUrls = await generateLogo(selectedStyle); // returns string[]
      setGeneratedLogos(logoUrls);
      setSelectedLogo(logoUrls[0] || ""); // auto-select first
    } catch (err) {
      console.error("❌ Failed to generate logo", err);
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = async () => {
    if (!selectedLogo) return;

    const hasChanged =
      initialData.selected_logo_style !== selectedStyle ||
      initialData.selected_logo_url !== selectedLogo;

    let uploadedLogoUrl = selectedLogo;

    // ✅ Upload to Supabase if base64 format
    if (selectedLogo.startsWith("data:image")) {
      try {
        console.log("🚀 Uploading base64 image to /api/upload-logo");

        const res = await fetch("/api/upload-logo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ base64: selectedLogo }),
        });

        if (!res.ok) throw new Error("Upload failed");

        const { url } = await res.json();
        uploadedLogoUrl = url;
      } catch (err) {
        console.error("❌ Logo upload failed", err);
        return;
      }
    }

    const updated: Partial<GetOnboardingResponse> = {
      selected_logo_style: selectedStyle,
      selected_logo_url: uploadedLogoUrl, // ✅ Supabase logo URL
      current_step: 5,
    };

    onUpdate(updated);

    if (hasChanged) {
      await saveOnboardingProgress({
        ...(initialData as OnboardingData),
        ...updated,
      });
    }

    onNext();
  };

  return (
    <OnboardingCard
      title="Pick a logo style that fits your vibe"
      subtext="Choose a style that feels right for your business. This helps us create a logo that matches your brand’s personality."
    >
      {hasExistingLogo && !loading && (
        <SelectedLogo logoUrl={selectedLogo} onContinue={handleContinue} />
      )}

      {!hasGenerated && !loading && !hasExistingLogo && (
        <>
          <LogoStyleSelector
            selectedStyle={selectedStyle}
            onSelect={(style) => {
              setSelectedStyle(style);
              setGeneratedLogos([]);
              setSelectedLogo("");
            }}
          />

          <div className="text-right mb-10">
            <Button
              type="secondary"
              size="sm"
              disabled={!selectedStyle}
              onClick={handleGenerate}
            >
              Generate Logo
            </Button>
          </div>
        </>
      )}

      {loading && <LogoLoadingSkeleton />}

      {hasGenerated && !hasExistingLogo && (
        <>
          <LogoPreviewGrid
            logos={generatedLogos}
            selected={selectedLogo}
            onSelect={setSelectedLogo}
          />
          <div className="text-right">
            <Button
              type="primary"
              size="lg"
              onClick={handleContinue}
              disabled={!selectedLogo}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </OnboardingCard>
  );
}
