"use client";

import { ROUTES } from "@/lib/constants/routes";
import { DashboardResponse } from "../../types/dashboard.type";
import WelcomeBanner from "./WelcomeBanner";
import Card from "@/app/components/ui/Card";
import {
  PencilSquareIcon,
  PlusIcon,
  DocumentTextIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

interface Props {
  data: DashboardResponse;
}

export default function DashboardCompleted({}: Props) {
  const quickActions = [
    {
      label: "Edit Brand Kit",
      href: ROUTES.BRAND_KIT,
      icon: <PencilSquareIcon className="w-5 h-5 text-blue-400" />,
    },
    {
      label: "Add New Service",
      href: ROUTES.BRAND_KIT,
      icon: <PlusIcon className="w-5 h-5 text-green-400" />,
    },
    {
      label: "View Your Flyer",
      href: ROUTES.BRAND_KIT,
      icon: <DocumentTextIcon className="w-5 h-5 text-purple-400" />,
    },
  ];

  const nextSteps = [
    "Share your flyer on Instagram or Facebook.",
    "Send your flyer to friends, family, or neighbors.",
    "Post your services on Craigslist, OfferUp, or Nextdoor.",
    "Print your flyer and leave it at a local coffee shop or laundromat.",
    "Tell at least 3 people about your new business today.",
  ];

  return (
    <main className="px-6 py-10 space-y-10">
      <WelcomeBanner status="completed" />

      {/* ⚡ Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {quickActions.map((action, i) => (
          <Card
            key={i}
            padded
            className="p-4 group hover:border-blue-500 transition cursor-pointer"
          >
            <a href={action.href} className="flex items-center gap-3">
              {action.icon}
              <span className="text-sm text-white group-hover:text-blue-400">
                {action.label}
              </span>
            </a>
          </Card>
        ))}
      </div>

      {/* 💡 Next Steps */}
      <Card>
        <div className="flex items-center gap-2 mb-6">
          <LightBulbIcon className="w-5 h-5 text-amber-300" />
          <h3 className="text-white font-semibold text-base">
            Here’s what to do next to start getting customers:
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {nextSteps.map((step, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 shadow-sm text-md text-gray-300 flex items-center gap-3"
            >
              <span className="text-white font-bold text-base">{i + 1}.</span>
              <span className="leading-snug">{step}</span>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
