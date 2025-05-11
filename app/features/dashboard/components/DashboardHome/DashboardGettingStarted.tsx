import WelcomeBanner from "./WelcomeBanner";
import StarterKitProgress from "./StarterKitProgress";
import { DashboardResponse } from "../../types/dashboard.type";

interface Props {
  data: DashboardResponse;
}

export default function DashboardGettingStarted({ data }: Props) {
  return (
    <main className="px-4 py-10 space-y-10">
      <WelcomeBanner status={data.onboardingStatus} />
      {data.progress && (
        <StarterKitProgress
          progress={data.progress.completedSteps}
          isCompleted={false}
          onClick={() => window.location.assign("/dashboard/starter-kit")}
        />
      )}
    </main>
  );
}
