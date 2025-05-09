"use client";

import { DashboardResponse } from "../../types/dashboard.type";
import WelcomeBanner from "./WelcomeBanner";
import LaunchChecklist from "@/app/features/LaunchPlan/components/LaunchChecklist";

interface Props {
  data: DashboardResponse;
}

export default function DashboardCompleted({}: Props) {
  return (
    <main className="px-4 py-10 space-y-10">
      <WelcomeBanner status="completed" />

      <LaunchChecklist
        userService="car detailing" // Ideally pull from user data
        userLocation="Austin, TX"
      />
    </main>
  );
}
