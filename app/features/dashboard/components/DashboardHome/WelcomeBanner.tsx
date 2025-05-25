"use client";

import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import Card from "@/app/components/ui/Card";

interface Props {
  status: "not_started" | "in_progress" | "completed";
  isPaid?: boolean;
}

export default function WelcomeBanner({ status, isPaid }: Props) {
  const router = useRouter();

  let title = "";
  let subtitle = "";
  let buttonText = "";

  if (status === "not_started") {
    title = "Welcome to Motivo. Let’s Build Your Dream Business.";
    subtitle =
      "We’ll guide you through picking a business name, designing your logo, and setting up everything you need to get started.";
    buttonText = "Start Brand Kit";
  } else if (status === "in_progress") {
    title = "You’re Officially on Your Way to Launching Your Business.";
    subtitle = "Let’s build your brand and get you set up step by step.";
    buttonText = "Continue Brand Kit";
  } else if (status === "completed" && !isPaid) {
    title = "Your Brand Kit is Done. Let’s Go Get Your First Client.";
    subtitle =
      "We’ll show you exactly what to do next — purchase your kit and we’ll guide you through the steps to land your first paying client.";
    buttonText = "Get My First Client";
  }

  return (
    <Card>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-400 text-sm sm:text-base mb-6">{subtitle}</p>
      <Button
        type="primary"
        size="lg"
        onClick={() => router.push(ROUTES.BRAND_KIT)}
      >
        {buttonText}
      </Button>
    </Card>
  );
}
