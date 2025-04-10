"use client";

import { useState } from "react";
import { GetOnboardingResponse } from "@/app/features/Onboarding/api/fetchOnboardingStatusWithData";
import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import StepProgressIndicator from "./StepProgressIndicator"; // 👈 new!
import Step4 from "./components/steps/Step4";
import Step5 from "./components/steps/Step5";
import Step6 from "./components/steps/Step6";
import Step7 from "./components/steps/Step7";

export default function OnboardingFlow({
  serverData,
}: {
  serverData: GetOnboardingResponse;
}) {
  const [step, setStep] = useState(serverData.current_step ?? 1);
  const [formData, setFormData] = useState(serverData);

  const updateForm = (values: Partial<GetOnboardingResponse>) => {
    setFormData((prev) => ({ ...prev, ...values }));
  };

  const next = () => setStep((s) => s + 1);
  const goToStep = (target: number) => setStep(target);

  const steps = {
    1: <Step1 initialData={formData} onNext={next} onUpdate={updateForm} />,
    2: <Step2 initialData={formData} onNext={next} onUpdate={updateForm} />,
    3: <Step3 initialData={formData} onNext={next} onUpdate={updateForm} />,
    4: <Step4 initialData={formData} onNext={next} onUpdate={updateForm} />,
    5: <Step5 initialData={formData} onNext={next} onUpdate={updateForm} />,
    6: <Step6 initialData={formData} onNext={next} onUpdate={updateForm} />,
    7: <Step7 initialData={formData} onNext={next} onUpdate={updateForm} />,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* ✅ Inline Progress Display */}
      <StepProgressIndicator currentStep={step} onStepClick={goToStep} />

      {/* Render Current Step */}
      {steps[step as keyof typeof steps] ?? <div>Step not found.</div>}
    </div>
  );
}
