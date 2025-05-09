// features/LaunchPlan/components/LaunchStepList.tsx
import LaunchStepCard from "./LaunchStepCard";

interface Step {
  title: string;
  description: string;
  action: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modalContent?: any;
}

interface Props {
  steps: Step[];
  completedSteps: number[];
  onStepClick: (index: number, step: Step) => void;
}

export default function LaunchStepList({
  steps,
  completedSteps,
  onStepClick,
}: Props) {
  return (
    <ul className="space-y-3 mt-6">
      {steps.map((step, i) => (
        <LaunchStepCard
          key={i}
          index={i}
          title={step.title}
          description={step.description}
          action={step.action}
          isComplete={completedSteps.includes(i)}
          onClick={() => onStepClick(i, step)}
        />
      ))}
    </ul>
  );
}
