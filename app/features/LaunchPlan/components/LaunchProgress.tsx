// features/LaunchPlan/components/LaunchProgress.tsx
interface Props {
  completed: number;
  total: number;
}

export default function LaunchProgress({ completed, total }: Props) {
  const percentage = (completed / total) * 100;

  return (
    <div className="mb-4 text-sm text-zinc-300">
      {completed} of {total} steps complete
      <div className="w-full bg-zinc-800 h-2 mt-2 rounded-full overflow-hidden">
        <div
          className="bg-violet-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
