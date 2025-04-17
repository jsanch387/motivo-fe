"use client";

import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { BrandKitStatus } from "../../types/dashboard.type";
import { ROUTES } from "@/lib/constants/routes";

interface Props {
  status: BrandKitStatus;
}

export default function WelcomeBanner({ status }: Props) {
  const router = useRouter();

  let title = "👋 Welcome to Motivo! Let’s build your dream business.";
  let subtitle =
    "We’ll guide you through picking your name, designing your logo, and setting up everything you need.";
  let buttonText = "Start My Kit";

  if (status === "in_progress") {
    title = "🚀 You’re officially on your way to launching your business.";
    subtitle = "Let’s build your brand and get you set up step by step.";
    buttonText = "Continue My Kit";
  } else if (status === "completed") {
    title = "🎉 Starter Kit Complete! You’re ready to launch.";
    subtitle =
      "Everything’s set. You can view, edit, or download your full kit anytime.";
    buttonText = "View My Kit";
  }

  return (
    <div className="bg-[rgba(255,255,255,0.03)] border border-gray-800 rounded-xl p-8 mb-10 shadow-md backdrop-blur-sm">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400 text-sm sm:text-base mb-6">{subtitle}</p>
      <Button
        type="primary"
        size="lg"
        onClick={() => router.push(ROUTES.BRAND_KIT)}
      >
        {buttonText}
      </Button>
    </div>
  );
}
