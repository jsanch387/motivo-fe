"use client";

import { useState } from "react";
import AddServiceForm from "./AddServiceForm";
import ServiceCardEditable from "./ServiceCardEditable";
import ServiceCardView from "./ServiceCardView";
import ServiceCardLocked from "./ServiceCardLocked";
import ServiceTabs from "./ServiceTabs";

interface Service {
  name: string;
  price: number;
  source?: "user" | "ai";
}

interface Props {
  user_services: Service[];
  suggested_services: Service[];
  isLockedPreview?: boolean;
}

export default function ServicesSection({
  user_services,
  suggested_services,
  isLockedPreview = false,
}: Props) {
  const showUserTab = user_services.length > 0;
  const showAiTab = suggested_services.length > 0;

  const [tab, setTab] = useState<"user" | "ai">(showUserTab ? "user" : "ai");

  const [services, setServices] = useState<Service[]>(user_services);
  const visibleSuggested = isLockedPreview
    ? suggested_services.slice(0, 2)
    : suggested_services;

  const activeServices = tab === "user" ? services : visibleSuggested;

  // Only apply locked placeholders if locked preview is active and we're on the AI tab
  const lockedCount =
    isLockedPreview && tab === "ai"
      ? Math.max(0, 6 - visibleSuggested.length)
      : 0;

  const helperText =
    tab === "user"
      ? "These are the services you've added to your kit."
      : showUserTab
      ? "These are tailored service suggestions to help increase your revenue and attract more clients."
      : "Here are some services we recommend to get you started.";

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">Services</h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Tabs + helper text */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="space-y-2">
            <ServiceTabs
              activeTab={tab}
              setActiveTab={setTab}
              showUserTab={showUserTab}
              showAiTab={showAiTab}
            />
            <p className="text-sm text-gray-400 max-w-lg">{helperText}</p>
          </div>
        </div>

        {/* Grid of services */}
        <div className="grid sm:grid-cols-2 gap-4">
          {activeServices.map((service, i) =>
            tab === "user" ? (
              isLockedPreview ? (
                <ServiceCardView
                  key={`user-${i}`}
                  name={service.name}
                  price={service.price}
                  source="user"
                />
              ) : (
                <ServiceCardEditable
                  key={`user-${i}`}
                  index={i}
                  name={service.name}
                  price={service.price}
                  onUpdate={(idx, updated) => {
                    const next = [...services];
                    next[idx] = { ...next[idx], ...updated };
                    setServices(next);
                  }}
                  onDelete={(idx) =>
                    setServices(services.filter((_, j) => j !== idx))
                  }
                />
              )
            ) : (
              <ServiceCardView
                key={`ai-${i}`}
                name={service.name}
                price={service.price}
                source="ai"
              />
            )
          )}

          {/* Locked AI suggestion placeholders */}
          {isLockedPreview &&
            tab === "ai" &&
            Array.from({ length: lockedCount }).map((_, i) => (
              <ServiceCardLocked key={`locked-${i}`} />
            ))}
        </div>

        {/* Add form (only in editable user tab) */}
        {!isLockedPreview && tab === "user" && (
          <AddServiceForm
            onAdd={(newService) =>
              setServices([...services, { ...newService, source: "user" }])
            }
          />
        )}
      </div>
    </section>
  );
}
