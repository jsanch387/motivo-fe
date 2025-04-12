"use client";

import clsx from "clsx";

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

  return (
    <div className="w-full max-w-5xl mx-auto mb-10 px-4">
      <div className="bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm rounded-xl px-6 py-6 shadow-md">
        {/* Step Count */}
        <div className="mb-4 text-center text-sm text-gray-400 font-medium">
          Step {currentStep} of {totalSteps}
        </div>

        {/* Steps Progress Tracker */}
        <div className="relative flex items-center justify-between gap-2 sm:gap-4">
          {stepLabels.map((label, idx) => {
            const step = idx + 1;
            const isActive = step === currentStep;
            const isPast = step < currentStep;
            const canClick = isPast && !brandKitLocked;

            return (
              <div
                key={step}
                className="flex-1 flex flex-col items-center group relative"
              >
                {/* Dot */}
                <button
                  disabled={!canClick}
                  onClick={() => canClick && onStepClick?.(step)}
                  className={clsx(
                    "w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 z-10 transition",
                    isActive
                      ? "border-blue-500 bg-blue-500"
                      : isPast
                      ? "border-green-500 bg-green-500"
                      : "border-zinc-700 bg-zinc-800",
                    canClick
                      ? "hover:scale-110 cursor-pointer"
                      : "cursor-default"
                  )}
                />
                {/* Label */}
                <span
                  className={clsx(
                    "text-[10px] sm:text-sm mt-2 text-center text-gray-400 leading-tight",
                    isActive && "text-blue-400 font-medium",
                    isPast && "text-green-400"
                  )}
                >
                  {label}
                </span>

                {/* Line Between Steps */}
                {step !== totalSteps && (
                  <div className="absolute top-3 left-1/2 w-full h-px bg-zinc-700 z-0 sm:left-[calc(50%+18px)] sm:w-[calc(100%-36px)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
