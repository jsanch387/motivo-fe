"use client";

import Card from "@/app/components/ui/Card";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useEffect, useRef } from "react";

type StepProgressProps = {
  currentStep: number;
  onStepClick?: (step: number) => void;
};

const stepLabels = [
  "Your Info",
  "Business Name",
  "Colors",
  "Logo",
  "Services",
  "Tools",
  "Review",
];

export default function StepProgressIndicator({
  currentStep,
  onStepClick,
}: StepProgressProps) {
  const totalSteps = stepLabels.length;
  const brandKitLocked = currentStep >= 7;

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    const active = container?.querySelector(".step-active");
    if (active && container) {
      const activeEl = active as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      const scrollOffset =
        activeRect.left -
        containerRect.left -
        containerRect.width / 2 +
        activeRect.width / 2;

      container.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  }, [currentStep]);

  return (
    <div className="w-full max-w-5xl mx-auto mb-10">
      <Card padded className="shadow-md">
        <div className="mb-4 text-center text-sm text-gray-400 font-medium">
          Step {currentStep} of {totalSteps}
        </div>

        {/* Responsive Tracker */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto sm:overflow-visible gap-6 sm:gap-0 px-2 sm:px-0 scrollbar-hide"
        >
          <div className="flex w-max sm:w-full sm:justify-between relative">
            {stepLabels.map((label, idx) => {
              const step = idx + 1;
              const isActive = step === currentStep;
              const isPast = step < currentStep;
              const canClick = isPast && !brandKitLocked;

              return (
                <div
                  key={step}
                  className={clsx(
                    "flex flex-col items-center text-center relative min-w-[80px] sm:flex-1",
                    isActive && "step-active"
                  )}
                >
                  <button
                    disabled={!canClick}
                    onClick={() => canClick && onStepClick?.(step)}
                    className={clsx(
                      "w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 z-10 transition flex items-center justify-center",
                      isActive
                        ? "border-blue-500 bg-blue-500"
                        : isPast
                        ? "border-green-500 bg-green-500"
                        : "border-zinc-700 bg-zinc-800",
                      canClick
                        ? "hover:scale-110 cursor-pointer"
                        : "cursor-default"
                    )}
                  >
                    {isPast && <CheckIcon className="w-4 h-4 text-white" />}
                  </button>

                  <span
                    className={clsx(
                      "text-[10px] sm:text-sm mt-2 text-gray-400 leading-tight whitespace-nowrap",
                      isActive && "text-blue-400 font-medium",
                      isPast && "text-green-400"
                    )}
                  >
                    {label}
                  </span>

                  {step !== totalSteps && (
                    <div className="hidden sm:block absolute top-3 left-1/2 w-full h-px bg-zinc-700 z-0 sm:left-[calc(50%+18px)] sm:w-[calc(100%-36px)]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
