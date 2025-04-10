import WelcomeBanner from "./WelcomeBanner";
import StarterKitProgress from "./StarterKitProgress";
import { DashboardResponse } from "../../types/dashboard.type";

interface Props {
  data: DashboardResponse;
}

export default function DashboardGettingStarted({ data }: Props) {
  console.log("DashboardGettingStarted", data);
  return (
    <main className="px-6 py-10 space-y-10">
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
