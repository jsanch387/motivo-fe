"use client";

import { useState, useEffect } from "react";
import Card from "@/app/components/ui/Card";
import { launchSteps } from "../constants/launchSteps";
import LaunchStepCard from "./LaunchStepCard";
import StepModal from "./Modal/StepModal";
import { stepComponentMap } from "./Steps/stepComponentMap";
import Button from "@/app/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { markStepComplete } from "../api/markStepComplete";
import { fetchStepData } from "../api/fetchStepData";
import { fetchCompletedSteps } from "../api/fetchCompletedSteps";
import LoadingIndicator from "@/app/components/ui/LoadingIndicator";

export default function LaunchChecklist() {
  // Track which steps are marked complete (by stepKey, not index)
  const [completedStepKeys, setCompletedStepKeys] = useState<string[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [loadingStep, setLoadingStep] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stepData, setStepData] = useState<Record<string, any>>({});

  const steps = launchSteps;
  const completedCount = completedStepKeys.length;
  const activeStep = activeStepIndex !== null ? steps[activeStepIndex] : null;
  const StepContent = activeStep ? stepComponentMap[activeStep.stepKey] : null;

  // Load completed steps from backend on first mount
  useEffect(() => {
    const loadCompleted = async () => {
      const keys = await fetchCompletedSteps();
      setCompletedStepKeys(keys);
    };

    loadCompleted();
  }, []);

  const handleStepOpen = async (index: number) => {
    const step = steps[index];

    setActiveStepIndex(index); // Open modal immediately

    const aiSteps = ["post-flyer", "message-network", "first-offer"];

    // Only fetch step data once
    if (aiSteps.includes(step.stepKey) && !stepData[step.stepKey]) {
      setLoadingStep(true);
      try {
        const data = await fetchStepData(step.stepKey);
        setStepData((prev) => ({
          ...prev,
          [step.stepKey]: data,
        }));
      } catch (e) {
        console.error("Failed to fetch step data:", e);
        alert("We couldn’t load this step. Please try again.");
      } finally {
        setLoadingStep(false);
      }
    }
  };

  const handleComplete = async () => {
    if (activeStepIndex === null) return;
    const step = steps[activeStepIndex];

    if (!completedStepKeys.includes(step.stepKey)) {
      try {
        await markStepComplete(step.stepKey);
        setCompletedStepKeys((prev) => [...prev, step.stepKey]);
      } catch (e) {
        console.error("Failed to mark step complete:", e);
        alert("Something went wrong. Please try again.");
      }
    }

    setActiveStepIndex(null);
  };

  return (
    <Card>
      <div className="mb-6 space-y-2">
        <h2 className="text-white text-xl font-semibold">
          Let’s Go Get Your First Client
        </h2>
        <p className="text-zinc-400 text-sm">
          Follow these 5 simple steps — we’ll walk you through exactly what to
          do to start getting real clients.
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
            isComplete={completedStepKeys.includes(step.stepKey)}
            onClick={() => handleStepOpen(i)}
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

      {activeStep && StepContent && (
        <StepModal
          open
          onClose={() => setActiveStepIndex(null)}
          title={activeStep.title}
        >
          {loadingStep ? (
            <LoadingIndicator title="Loading..." />
          ) : (
            <>
              <StepContent {...(stepData[activeStep.stepKey] ?? {})} />
              {completedStepKeys.includes(activeStep.stepKey) ? (
                <Button
                  disabled
                  className="w-full bg-zinc-700 text-white font-medium text-sm py-2 mt-6 cursor-default"
                  icon={<CheckCircle2 className="w-4 h-4" />}
                >
                  Step Completed
                </Button>
              ) : (
                <Button
                  onClick={handleComplete}
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm py-2 mt-6"
                  icon={<CheckCircle2 className="w-4 h-4" />}
                >
                  Mark Step Complete
                </Button>
              )}
            </>
          )}
        </StepModal>
      )}
    </Card>
  );
}
