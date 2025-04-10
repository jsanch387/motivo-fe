import { fetchDashboardData } from "@/app/features/dashboard/api/fetchDashboardData";
import DashboardHome from "@/app/features/dashboard/components/DashboardHome/DashboardHome";
import { DashboardResponse } from "@/app/features/dashboard/types/dashboard.type";

export default async function DashboardPage() {
  let data: DashboardResponse | null = null;
  let errorMessage: string | null = null;

  try {
    data = await fetchDashboardData();
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = "Something went wrong loading the dashboard.";
    }
  }

  if (errorMessage || !data) {
    return <div className="min-h-screen p-6">Error: {errorMessage}</div>;
  }

  return (
    <div className="min-h-screen">
      <DashboardHome data={data} />
    </div>
  );
}
