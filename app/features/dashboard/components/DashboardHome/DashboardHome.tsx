"use client";

import { DashboardResponse } from "../../types/dashboard.type";
import DashboardGettingStarted from "./DashboardGettingStarted";
import DashboardInProgress from "./DashboardInProgress";
import DashboardCompleted from "./DashboardCompleted";

interface DashboardHomeProps {
  data: DashboardResponse | null;
}

export default function DashboardHome({ data }: DashboardHomeProps) {
  if (!data) {
    return (
      <p className="text-white p-6">Loading or failed to load dashboard.</p>
    );
  }

  console.log("DashboardHome data", data);

  switch (data.onboardingStatus) {
    case "not_started":
      return <DashboardGettingStarted data={data} />;
    case "in_progress":
      return <DashboardInProgress data={data} />;
    case "completed":
      return <DashboardCompleted data={data} />;
    default:
      return <p className="text-red-500 p-6">Unknown status.</p>;
  }
}
