"use client";

import { DashboardResponse } from "../../types/dashboard.type";
import WelcomeBanner from "./WelcomeBanner";
import LaunchChecklist from "@/app/features/LaunchPlan/components/LaunchChecklist";
import LaunchGuideUpsell from "./LaunchGuideUpsell";

interface Props {
  data: DashboardResponse;
}

export default function DashboardCompleted({ data }: Props) {
  return (
    <main className="px-4 py-10 space-y-10">
      <WelcomeBanner status="completed" />

      {!data.isPaid ? (
        // ✅ User has NOT paid → show pay CTA inside reusable Card (left-aligned)
        <LaunchGuideUpsell
          onPurchaseClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : (
        // ✅ User has paid → show launch checklist
        <LaunchChecklist
          userService="car detailing" // ✅ Ideally later you pull this from user data
          userLocation="Austin, TX"
        />
      )}
    </main>
  );
}
