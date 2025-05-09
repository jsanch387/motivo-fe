"use client";

import { useState } from "react";
import Card from "@/app/components/ui/Card";
import { launchSteps } from "../constants/launchSteps";
import LaunchStepCard from "./LaunchStepCard";
import StepModal from "./Modal/StepModal";
import { stepComponentMap } from "./Steps/stepComponentMap";
import Button from "@/app/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

interface Props {
  userService: string;
  userLocation: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LaunchChecklist({ userService, userLocation }: Props) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const steps = launchSteps;
  const completedCount = completedSteps.length;
  const activeStep = activeStepIndex !== null ? steps[activeStepIndex] : null;
  const StepContent = activeStep ? stepComponentMap[activeStep.stepKey] : null;

  const handleComplete = () => {
    if (activeStepIndex !== null && !completedSteps.includes(activeStepIndex)) {
      setCompletedSteps((prev) => [...prev, activeStepIndex]);
    }
    setActiveStepIndex(null); // close modal
  };

  return (
    <Card>
      <div className="mb-6 space-y-2">
        <h2 className="text-white text-xl font-semibold">
          Get Your First Client
        </h2>
        <p className="text-zinc-400">
          87% of {userService} businesses get clients through social media.
          Complete these steps to start growing.
        </p>
      </div>

      <div className="mb-4 text-sm text-zinc-300">
        {completedCount} of {steps.length} steps complete
        <div className="w-full bg-zinc-800 h-2 mt-2 rounded-full overflow-hidden">
          <div
            className="bg-violet-500 h-2 rounded-full"
            style={{ width: `${(completedCount / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <ul className="space-y-3 mt-6">
        {steps.map((step, i) => (
          <LaunchStepCard
            key={step.stepKey}
            index={i}
            title={step.title}
            description={step.description}
            action={step.action}
            isComplete={completedSteps.includes(i)}
            onClick={() => setActiveStepIndex(i)}
          />
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-zinc-800">
        <p className="text-zinc-500 text-sm">
          Need help?{" "}
          <a href="#" className="text-violet-400 hover:underline">
            Chat with our team
          </a>
        </p>
      </div>

      {/* Modal for Step Detail */}
      {activeStep && StepContent && (
        <StepModal
          open
          onClose={() => setActiveStepIndex(null)}
          title={activeStep.title}
        >
          <StepContent />
          <Button
            onClick={handleComplete}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm py-2 mt-6"
            icon={<CheckCircle2 className="w-4 h-4" />}
          >
            Mark Step Complete
          </Button>
        </StepModal>
      )}
    </Card>
  );
}
