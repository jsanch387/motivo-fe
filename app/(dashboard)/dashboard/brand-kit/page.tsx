// app/dashboard/starter-kit/page.tsx
import { fetchOnboardingStatusWithData } from "@/app/features/Onboarding/api/fetchOnboardingStatusWithData";
import StarterKitEntryPoint from "@/app/features/Onboarding/StarterKitEntryPoint";

export default async function StarterKitPage() {
  const serverData = await fetchOnboardingStatusWithData();
  return <StarterKitEntryPoint serverData={serverData} />;
}
