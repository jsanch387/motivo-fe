"use client";

import { useEffect, useState } from "react";
import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/TextInput";
import SelectInput from "@/app/components/ui/SelectInput";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { OnboardingData } from "../../types/onboarding.type";
import OnboardingCard from "../OnboardingCard";

const readinessOptions = [
  {
    label: "Just getting started – no experience or gear yet",
    value: "just_starting",
  },
  {
    label: "In progress – done a few gigs and have some tools",
    value: "in_progress",
  },
  {
    label: "Already running – doing this, but want to level up",
    value: "already_running",
  },
];

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

export default function Step1({ initialData, onNext, onUpdate }: Props) {
  const [form, setForm] = useState({
    service_type: "",
    location: "",
    readiness_level: "",
  });

  useEffect(() => {
    setForm({
      service_type: initialData.service_type || "",
      location: initialData.location || "",
      readiness_level: initialData.readiness_level || "",
    });
  }, [initialData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, readiness_level: value }));
  };

  const handleContinue = async () => {
    const updatedData: Partial<GetOnboardingResponse> = {
      service_type: form.service_type,
      location: form.location,
      readiness_level: form.readiness_level,
      current_step: 2,
    };

    const hasChanged =
      initialData.service_type !== updatedData.service_type ||
      initialData.location !== updatedData.location ||
      initialData.readiness_level !== updatedData.readiness_level;

    if (hasChanged) {
      onUpdate(updatedData); // only call this if something changed

      await saveOnboardingProgress({
        ...(initialData as Partial<OnboardingData>),
        ...updatedData,
      } as OnboardingData);
    }

    onNext(); // ✅ Always go to next step regardless
  };

  return (
    <OnboardingCard title="Let’s get to know your hustle">
      <div className="space-y-8">
        <TextInput
          label="What side hustle are you starting?"
          name="service_type"
          value={form.service_type}
          onChange={handleInputChange}
          placeholder="e.g. Mobile Detailing, Pet Grooming"
          required
          error="This field is required"
        />

        <SelectInput
          label="Where are you in your hustle journey?"
          name="readiness_level"
          value={form.readiness_level}
          onChange={handleSelectChange}
          options={readinessOptions}
          required
          error="This field is required"
        />

        <TextInput
          label="Where will you operate?"
          name="location"
          value={form.location}
          onChange={handleInputChange}
          placeholder="City or ZIP"
          required
          error="This field is required"
        />
      </div>
      <div className="mt-12 text-right">
        <Button
          type="primary"
          size="lg"
          onClick={handleContinue}
          disabled={
            !form.service_type || !form.location || !form.readiness_level
          }
        >
          Start Brand Kit
        </Button>
      </div>
    </OnboardingCard>
  );
}
