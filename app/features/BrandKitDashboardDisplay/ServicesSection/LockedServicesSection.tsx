"use client";

import { Service } from "../../Onboarding/types/brandKit.type";
import ServiceCardLocked from "./ServiceCardLocked";
import ServiceCardView from "./ServiceCardView";
import ServiceTabs from "./ServiceTabs";
import { useState } from "react";

interface Props {
  user_services: Service[];
  suggested_services: Service[];
}

export default function LockedServicesSection({
  user_services,
  suggested_services,
}: Props) {
  const hasUserServices = user_services.length > 0;
  const lockedCount = Math.max(0, 6 - suggested_services.length);

  const [tab, setTab] = useState<"user" | "ai">(
    hasUserServices ? "user" : "ai"
  );

  const activeServices = tab === "user" ? user_services : suggested_services;

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">Services</h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Tabs */}
        <ServiceTabs
          activeTab={tab}
          setActiveTab={hasUserServices ? setTab : () => {}}
          showUserTab={hasUserServices}
          showAiTab
        />

        <p className="text-sm text-gray-400 mb-6">
          {tab === "user"
            ? "These are the services you’ve added to your brand kit."
            : "These are a few of the services we recommend. Unlock to see them all."}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {activeServices.map((s, i) => (
            <ServiceCardView
              key={`${tab}-${i}`}
              name={s.name}
              price={s.price}
              source={tab}
            />
          ))}

          {tab === "ai" &&
            Array.from({ length: lockedCount }).map((_, i) => (
              <ServiceCardLocked key={`locked-${i}`} />
            ))}
        </div>
      </div>
    </section>
  );
}
