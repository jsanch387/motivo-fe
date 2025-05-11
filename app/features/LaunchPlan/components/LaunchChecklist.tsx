/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Card from "@/app/components/ui/Card";
import { launchSteps } from "../constants/launchSteps";
import LaunchStepCard from "./LaunchStepCard";
import StepModal from "./Modal/StepModal";
import { stepComponentMap } from "./Steps/stepComponentMap";
import Button from "@/app/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

// ✅ ✅ ✅ MOCK API FUNCTION (replace later with real fetch)
async function fetchStepDataFromBackend(stepKey: string) {
  console.log(`fetching data for step: ${stepKey}`);
  await new Promise((resolve) => setTimeout(resolve, 500)); // simulate delay

  if (stepKey === "join-groups") {
    return {
      groups: [
        {
          name: "Austin Homeowners & Neighbors",
          members: "8,200 members",
          url: "https://facebook.com/groups/austinhomeowners",
          tip: "Post before/after photos in existing threads for better engagement",
        },
        {
          name: "Austin Auto Enthusiasts Club",
          members: "5,100 members",
          url: "https://facebook.com/groups/austinauto",
          tip: "Comment on 3-5 posts before sharing your services",
        },
        {
          name: "Austin Small Business Network",
          members: "12,000 members",
          url: "https://facebook.com/groups/austinsmallbiz",
          tip: "Share special offers only on promo days (Wednesdays)",
        },
      ],
    };
  }

  // ✅ safe default for other steps
  return { success: true };
}

interface Props {
  userService: string;
  userLocation: string;
}

export default function LaunchChecklist({ userService, userLocation }: Props) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);
  const [loadingStep, setLoadingStep] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stepData, setStepData] = useState<Record<string, any>>({});

  const steps = launchSteps;
  const completedCount = completedSteps.length;
  const activeStep = activeStepIndex !== null ? steps[activeStepIndex] : null;
  const StepContent = activeStep ? stepComponentMap[activeStep.stepKey] : null;

  // ✅ NEW: handle step open + fetch + store data
  const handleStepOpen = async (index: number) => {
    const step = steps[index];

    // only AI steps (you can define this inside steps later)
    const aiSteps = [
      "join-groups",
      "post-flyer",
      "message-network",
      "first-offer",
    ];

    if (aiSteps.includes(step.stepKey) && !stepData[step.stepKey]) {
      setLoadingStep(true);

      try {
        const data = await fetchStepDataFromBackend(step.stepKey);
        setStepData((prev) => ({
          ...prev,
          [step.stepKey]: data,
        }));
      } catch (e) {
        console.error("Failed to fetch step data", e);
        return;
      } finally {
        setLoadingStep(false);
      }
    }

    setActiveStepIndex(index);
  };

  const handleComplete = () => {
    if (activeStepIndex !== null && !completedSteps.includes(activeStepIndex)) {
      setCompletedSteps((prev) => [...prev, activeStepIndex]);
    }
    setActiveStepIndex(null);
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

      {/* ✅ Modal for Step Detail */}
      {activeStep && StepContent && (
        <StepModal
          open
          onClose={() => setActiveStepIndex(null)}
          title={activeStep.title}
        >
          {loadingStep ? (
            <div className="text-center py-10 text-zinc-400">Loading...</div>
          ) : (
            <>
              {/* ✅ Pass stepData into StepContent */}
              <StepContent {...(stepData[activeStep.stepKey] ?? {})} />
              <Button
                onClick={handleComplete}
                className="w-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm py-2 mt-6"
                icon={<CheckCircle2 className="w-4 h-4" />}
              >
                Mark Step Complete
              </Button>
            </>
          )}
        </StepModal>
      )}
    </Card>
  );
}
