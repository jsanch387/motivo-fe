"use client";

import { useState } from "react";
import Image from "next/image";
import { Wand2, Smile, Zap, Loader2 } from "lucide-react";

import Button from "@/app/components/ui/Button";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { OnboardingData } from "../../types/onboarding.type";
import OnboardingCard from "../OnboardingCard";
import { generateLogo } from "../../api/generateLogo";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

const LOGO_STYLE_OPTIONS = [
  {
    label: "Modern & Minimalist",
    value: "modern_minimalist",
    description:
      "Clean, simple, and professional. Ideal for trust and clarity.",
    icon: <Wand2 size={40} className="text-blue-400" />,
  },
  {
    label: "Friendly & Approachable",
    value: "friendly_approachable",
    description:
      "Soft, welcoming design – great for personal brands or family-friendly services.",
    icon: <Smile size={40} className="text-green-400" />,
  },
  {
    label: "Bold & High-Impact",
    value: "bold_high_impact",
    description:
      "Strong shapes and striking design for businesses that want to stand out.",
    icon: <Zap size={40} className="text-yellow-400" />,
  },
];

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
      const logoUrl = await generateLogo(selectedStyle);
      setGeneratedLogos([logoUrl]);
      setSelectedLogo(logoUrl);
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

    const updated: Partial<GetOnboardingResponse> = {
      selected_logo_style: selectedStyle,
      selected_logo_url: selectedLogo,
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
    <OnboardingCard title="Pick a logo style that fits your vibe">
      <p className="text-gray-400 text-sm mb-6 max-w-2xl">
        Choose a style that feels right for your business. This helps us create
        a logo that matches your brand’s personality.
      </p>

      {/* ✅ Return user with existing logo */}
      {hasExistingLogo && !loading && (
        <>
          <div className="flex justify-center mb-10">
            <div className="relative w-36 h-36 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <Image
                src={selectedLogo}
                alt="Your Selected Logo"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <Button type="primary" size="lg" onClick={handleContinue}>
              Continue
            </Button>
          </div>
          return;
        </>
      )}

      {!hasGenerated && !loading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {LOGO_STYLE_OPTIONS.map(({ label, value, description, icon }) => (
              <div
                key={value}
                onClick={() => {
                  setSelectedStyle(value);
                  setGeneratedLogos([]);
                  setSelectedLogo("");
                }}
                className={`cursor-pointer rounded-xl border transition p-6 text-center space-y-3 ${
                  selectedStyle === value
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-700 hover:border-blue-500"
                }`}
              >
                <div className="flex justify-center">{icon}</div>
                <h4 className="text-white font-semibold">{label}</h4>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>

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

      {loading && (
        <div className="flex items-center justify-center mb-10">
          <Loader2 className="animate-spin text-white w-6 h-6 mr-2" />
          <span className="text-white text-base">Creating your logo…</span>
        </div>
      )}

      {hasGenerated && !hasExistingLogo && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {generatedLogos.map((url, idx) => (
              <div
                key={url}
                onClick={() => setSelectedLogo(url)}
                className={`cursor-pointer rounded-xl border transition p-4 flex flex-col items-center space-y-3 ${
                  selectedLogo === url
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-700 hover:border-blue-500"
                }`}
              >
                <div className="relative w-32 h-32 bg-zinc-800 rounded-lg overflow-hidden">
                  <Image
                    src={url}
                    alt={`Generated Logo ${idx + 1}`}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-400">Logo Option #{idx + 1}</p>
              </div>
            ))}
          </div>

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
