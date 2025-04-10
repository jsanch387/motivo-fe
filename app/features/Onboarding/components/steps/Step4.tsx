"use client";

import { useState } from "react";
import { Sparkles, Brush, Shield } from "lucide-react";

import Button from "@/app/components/ui/Button";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { OnboardingData } from "../../types/onboarding.type";
import OnboardingCard from "../OnboardingCard";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

const PlaceholderLogo = ({ variant }: { variant: string }) => {
  const icons = {
    Minimal: <Shield size={40} className="text-blue-300" />,
    Playful: <Sparkles size={40} className="text-pink-400" />,
    Bold: <Brush size={40} className="text-yellow-400" />,
  };
  return icons[variant as keyof typeof icons] || <Shield size={40} />;
};

const mockGenerateLogos = async (style: string): Promise<string[]> => {
  await new Promise((res) => setTimeout(res, 500));
  return [`${style}_LOGO_1`, `${style}_LOGO_2`, `${style}_LOGO_3`];
};

export default function Step4({ initialData, onNext, onUpdate }: Props) {
  const [selectedStyle, setSelectedStyle] = useState(
    initialData.selected_logo_style || ""
  );
  const [generatedLogos, setGeneratedLogos] = useState<string[]>([]);
  const [selectedLogo, setSelectedLogo] = useState(
    initialData.selected_logo_id || ""
  );
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!selectedStyle) return;
    setLoading(true);
    const logos = await mockGenerateLogos(selectedStyle);
    setGeneratedLogos(logos);
    setSelectedLogo("");
    setLoading(false);
  };

  const handleContinue = async () => {
    if (!selectedLogo) return;

    const hasChanged =
      initialData.selected_logo_style !== selectedStyle ||
      initialData.selected_logo_id !== selectedLogo;

    const updated: Partial<GetOnboardingResponse> = {
      selected_logo_style: selectedStyle,
      selected_logo_id: selectedLogo,
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
    <OnboardingCard title="🎨 Choose your logo style">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {["Minimal", "Playful", "Bold"].map((style) => (
          <div
            key={style}
            onClick={() => {
              setSelectedStyle(style);
              setGeneratedLogos([]);
              setSelectedLogo("");
            }}
            className={`cursor-pointer rounded-xl border transition p-6 text-center space-y-3 ${
              selectedStyle === style
                ? "border-blue-500 bg-blue-500/10"
                : "border-zinc-700 hover:border-blue-500"
            }`}
          >
            <PlaceholderLogo variant={style} />
            <h4 className="text-white font-semibold">{style}</h4>
            <p className="text-sm text-gray-400">
              {style === "Minimal" &&
                "Clean, simple and modern – great for trust and clarity."}
              {style === "Playful" &&
                "Fun and friendly – perfect for family or kid-oriented brands."}
              {style === "Bold" &&
                "Loud, edgy, and confident – for businesses that stand out."}
            </p>
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
          Generate Logos
        </Button>
      </div>

      {loading && (
        <p className="text-white text-lg mb-10">Creating logo options...</p>
      )}

      {generatedLogos.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {generatedLogos.map((logoId, idx) => (
              <div
                key={logoId}
                onClick={() => setSelectedLogo(logoId)}
                className={`cursor-pointer rounded-xl border transition p-6 flex flex-col items-center space-y-3 ${
                  selectedLogo === logoId
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-700 hover:border-blue-500"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Sparkles size={30} />
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
