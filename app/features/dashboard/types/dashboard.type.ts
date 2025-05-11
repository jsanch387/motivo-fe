export type OnboardingStatus = "not_started" | "in_progress" | "completed";

export interface DashboardProgress {
  completedSteps: number;
  totalSteps: number;
  completedStepLabels: string[];
  currentStep: string;
}

export interface DashboardResponse {
  onboardingStatus: OnboardingStatus;
  progress?: DashboardProgress;
  isPaid?: boolean;
}
