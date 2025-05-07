"use client";

import ServiceCardView from "./ServiceCardView";
import ServiceTabs from "./ServiceTabs";

interface Service {
  name: string;
  price: number;
  source?: "user" | "ai";
}

interface Props {
  user_services: Service[];
  suggested_services: Service[];
}

export default function PaidServicesSection({
  user_services,
  suggested_services,
}: Props) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold text-white mb-4">Services</h3>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-6 sm:px-6 sm:py-8">
        <ServiceTabs
          activeTab="user"
          setActiveTab={() => {}}
          showUserTab
          showAiTab
        />

        {/* User services (read-only) */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {user_services.map((s, i) => (
            <ServiceCardView
              key={`user-${i}`}
              name={s.name}
              price={s.price}
              source="user"
            />
          ))}
        </div>

        {/* Add form removed */}
        {/* <AddServiceForm
          onAdd={(newService) =>
            setServices([...services, { ...newService, source: "user" }])
          }
        /> */}

        {/* Suggested AI services */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {suggested_services.map((s, i) => (
            <ServiceCardView
              key={`ai-${i}`}
              name={s.name}
              price={s.price}
              source="ai"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
