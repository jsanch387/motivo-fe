import WelcomeBanner from "./WelcomeBanner";
import StarterKitProgress from "./StarterKitProgress";
import { DashboardResponse } from "../../types/dashboard.type";
import { ROUTES } from "@/lib/constants/routes";

interface Props {
  data: DashboardResponse;
}

export default function DashboardInProgress({ data }: Props) {
  return (
    <main className="px-6 py-10 space-y-10">
      <WelcomeBanner status="in_progress" />
      {data.progress && (
        <StarterKitProgress
          progress={data.progress.completedSteps}
          isCompleted={false}
          onClick={() => window.location.assign(ROUTES.BRAND_KIT)}
        />
      )}
    </main>
  );
}
