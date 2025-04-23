"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/TextInput";
import SelectableTab from "@/app/components/ui/SelectableTab";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { generateFromAI } from "../../api/generateFromAI";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { OnboardingData } from "../../types/onboarding.type";
import OnboardingCard from "../OnboardingCard";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

const MAX_REGENERATIONS = 3;

export default function Step2({ initialData, onNext, onUpdate }: Props) {
  const hasFetchedRef = useRef(false);
  const [nameOptions, setNameOptions] = useState<string[]>(
    initialData.business_name_suggestions || []
  );
  const [selected, setSelected] = useState<string | null>(
    initialData.selected_business_name || null
  );
  const [customName, setCustomName] = useState(initialData.custom_name || "");
  const [loading, setLoading] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [regenerationsLeft, setRegenerationsLeft] = useState(MAX_REGENERATIONS);

  useEffect(() => {
    const shouldFetch = !hasFetchedRef.current && nameOptions.length === 0;
    if (shouldFetch) {
      hasFetchedRef.current = true;
      fetchNames();
    }
  }, []);

  const fetchNames = async (isRegenerate = false) => {
    if (isRegenerate && regenerationsLeft <= 0) return;

    setLoading(true);
    setRegenerating(isRegenerate);

    try {
      const suggestions = await generateFromAI<string[]>("business_names");
      setNameOptions(suggestions);
      setSelected(null);
      setCustomName("");
      if (isRegenerate) {
        setRegenerationsLeft((prev) => prev - 1);
      }
    } catch (err) {
      console.error("❌ Failed to fetch business names:", err);
    } finally {
      setLoading(false);
      setRegenerating(false);
    }
  };

  const handleSelect = (name: string) => {
    setSelected(name);
    setCustomName("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomName(e.target.value);
    setSelected(null);
  };

  const handleContinue = async () => {
    const finalName = customName || selected;
    if (!finalName) return;

    const hasChanged =
      initialData.selected_business_name !== selected ||
      initialData.custom_name !== customName ||
      JSON.stringify(initialData.business_name_suggestions || []) !==
        JSON.stringify(nameOptions);

    const updatedData: Partial<OnboardingData> = {
      business_name_suggestions: nameOptions,
      selected_business_name: selected || "",
      custom_name: customName || "",
      current_step: 3,
    };

    const merged: OnboardingData = {
      ...defaultOnboardingData,
      ...initialData,
      ...updatedData,
    };

    onUpdate(updatedData);

    if (hasChanged) {
      await saveOnboardingProgress(merged);
    }

    onNext();
  };

  return (
    <OnboardingCard
      title="Pick a business name"
      subtext="Choose a name that fits your vibe. You can enter your own or pick from our AI suggestions."
    >
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent mb-4" />
          <p className="text-white text-base font-medium">
            {regenerating
              ? "Regenerating new ideas..."
              : "Coming up with name ideas..."}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            This usually takes just a few seconds.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {nameOptions.map((name) => (
              <SelectableTab
                key={name}
                label={name}
                selected={selected === name}
                onClick={() => handleSelect(name)}
              />
            ))}
          </div>

          <div className="flex items-center justify-between mb-10">
            <Button
              type="secondary"
              size="sm"
              onClick={() => fetchNames(true)}
              disabled={regenerationsLeft <= 0}
            >
              Regenerate Suggestions
            </Button>
            <p className="text-sm text-gray-400">
              {regenerationsLeft} {regenerationsLeft === 1 ? "try" : "tries"}{" "}
              left
            </p>
          </div>

          <div className="mb-12">
            <TextInput
              label="Or enter your own name:"
              name="custom_name"
              value={customName}
              onChange={handleCustomChange}
              placeholder="Your custom business name"
            />
          </div>

          <div className="text-right">
            <Button
              type="primary"
              size="lg"
              onClick={handleContinue}
              disabled={!selected && !customName}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </OnboardingCard>
  );
}

const defaultOnboardingData: OnboardingData = {
  current_step: 1,
  service_type: "",
  location: "",
  readiness_level: "",
  business_name_suggestions: [],
  selected_business_name: "",
  custom_name: "",
  brand_color_options: [],
  selected_color_palette: [],
  logo_style_options: ["Minimal", "Playful", "Bold"],
  selected_logo_style: "",
  selected_logo_url: "",
  services: [],
  tools: [],
  slogan: "",
};
