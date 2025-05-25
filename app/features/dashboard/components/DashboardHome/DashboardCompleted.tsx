"use client";

import { DashboardResponse } from "../../types/dashboard.type";
import WelcomeBanner from "./WelcomeBanner";
import LaunchChecklist from "@/app/features/LaunchPlan/components/LaunchChecklist";

interface Props {
  data: DashboardResponse;
}

export default function DashboardCompleted({ data }: Props) {
  const { isPaid, onboardingStatus } = data;

  const shouldShowWelcome =
    onboardingStatus === "in_progress" ||
    (onboardingStatus === "completed" && !isPaid);

  return (
    <main className="px-4 py-10 space-y-10">
      {shouldShowWelcome && (
        <WelcomeBanner status={onboardingStatus} isPaid={!!isPaid} />
      )}

      {isPaid && <LaunchChecklist />}
    </main>
  );
}
