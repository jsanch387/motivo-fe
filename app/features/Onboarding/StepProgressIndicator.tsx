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
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-10">
      {/* Progress Bar */}
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Step Text */}
      <div className="mt-2 text-right text-sm text-gray-400">
        Step {currentStep} of {totalSteps}
      </div>

      {/* Step Labels */}
      <ul className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
        {stepLabels.map((label, idx) => {
          const step = idx + 1;
          const isActive = step === currentStep;
          const isPast = step < currentStep;
          const isFuture = step > currentStep;

          return (
            <li
              key={step}
              className={clsx(
                "px-4 py-2 rounded-md text-sm font-medium border cursor-default",
                isActive && "border-blue-500 bg-blue-500/10 text-blue-400",
                isPast &&
                  "border-green-600 text-green-400 hover:bg-green-600/10 cursor-pointer",
                isFuture && "border-gray-700 text-gray-400 opacity-50"
              )}
              onClick={() => {
                if (isPast && onStepClick) {
                  onStepClick(step);
                }
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
