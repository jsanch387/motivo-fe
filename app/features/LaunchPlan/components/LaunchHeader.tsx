// features/LaunchPlan/components/LaunchHeader.tsx
interface Props {
  userService: string;
}

export default function LaunchHeader({ userService }: Props) {
  return (
    <div className="mb-6 space-y-2">
      <h2 className="text-white text-xl font-semibold">
        Get Your First Client
      </h2>
      <p className="text-zinc-400">
        87% of {userService} businesses get clients through social media.
        Complete these steps to start growing.
      </p>
    </div>
  );
}
