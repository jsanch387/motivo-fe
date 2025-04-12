// ServicesSection.tsx

"use client";

import { useState } from "react";
import AddServiceForm from "./AddServiceForm";
import ServiceCardEditable from "./ServiceCardEditable";
import ServiceTabs from "./ServiceTabs";
import ServiceCardView from "./ServiceCardView";
import ServiceCardLocked from "./ServiceCardLocked";

interface Service {
  name: string;
  price: number;
  source?: "user" | "ai";
}

interface Props {
  user_services: Service[];
  suggested_services: Service[];
  isLockedPreview?: boolean; // ← NEW prop
}

export default function ServicesSection({
  user_services,
  suggested_services,
  isLockedPreview = false,
}: Props) {
  const showUserTab = user_services.length > 0;
  const showAiTab = suggested_services.length > 0;

  const [tab, setTab] = useState<"user" | "ai">(showUserTab ? "user" : "ai");

  const visibleSuggested = isLockedPreview
    ? suggested_services.slice(0, 2)
    : suggested_services;

  const servicesState = useState<Service[]>(user_services);
  const [services, setServices] = servicesState;

  const activeServices = tab === "user" ? services : visibleSuggested;

  const lockedCount =
    isLockedPreview && tab === "ai"
      ? Math.max(0, 6 - visibleSuggested.length - user_services.length)
      : 0;

  const helperText =
    tab === "user"
      ? "These are the services you've added to your kit."
      : showUserTab
      ? "These are tailored service suggestions to help increase your revenue and attract more clients."
      : "Here are some services we recommend to get you started.";

  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">
        Services You Can Offer
      </h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        {/* Tabs + Helper Text */}
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

        {/* Services Grid */}
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
                    setServices(services.filter((_, i) => i !== idx))
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

          {/* 🔒 Locked slots for suggestions */}
          {isLockedPreview &&
            tab === "ai" &&
            Array.from({ length: lockedCount }).map((_, i) => (
              <ServiceCardLocked key={`locked-${i}`} />
            ))}
        </div>

        {/* Add Service Form (only if editable) */}
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
