"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/TextInput";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { OnboardingData } from "../../types/onboarding.type";
import OnboardingCard from "../OnboardingCard";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

interface ServiceForm {
  id: number;
  name: string;
  price: string;
}

export default function Step5({ initialData, onNext, onUpdate }: Props) {
  const [services, setServices] = useState<ServiceForm[]>([]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const existingServices = initialData.services || [];
    if (existingServices.length > 0) {
      const hydrated = existingServices.map((s, i) => ({
        id: i + 1,
        name: s.name,
        price: s.price.toString(),
      }));
      setServices(hydrated);
      setNextId(hydrated.length + 1);
    }
  }, [initialData.services]);

  const handleAdd = () => {
    setServices([...services, { id: nextId, name: "", price: "" }]);
    setNextId((prev) => prev + 1);
  };

  const handleChange = (
    id: number,
    field: keyof ServiceForm,
    value: string
  ) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const handleRemove = (id: number) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const handleContinue = async () => {
    const formatted = services
      .filter((s) => s.name.trim() && s.price.trim())
      .map((s) => ({
        name: s.name.trim(),
        price: parseFloat(s.price),
      }));

    const hasChanged =
      JSON.stringify(initialData.services || []) !== JSON.stringify(formatted);

    const updatedData: Partial<GetOnboardingResponse> = {
      services: formatted,
      current_step: 6,
    };

    onUpdate(updatedData);

    if (formatted.length > 0 && hasChanged) {
      await saveOnboardingProgress({
        ...(initialData as Partial<OnboardingData>),
        ...updatedData,
      } as OnboardingData);
    }

    onNext();
  };

  return (
    <OnboardingCard title="Define your services & pricing">
      <p className="text-sm text-gray-400 mb-6">
        Don’t have services or pricing yet? No worries — we’ll help you generate
        that next.
      </p>

      <div className="space-y-6 mb-10">
        {services.map((service) => (
          <div key={service.id} className="flex items-end gap-4">
            <div className="flex-1">
              <TextInput
                label="Service Name"
                name={`service-name-${service.id}`}
                value={service.name}
                onChange={(e) =>
                  handleChange(service.id, "name", e.target.value)
                }
                placeholder="e.g. Full Exterior Detail"
              />
            </div>
            <div className="w-32">
              <TextInput
                label="Price"
                name={`service-price-${service.id}`}
                value={service.price}
                onChange={(e) =>
                  handleChange(service.id, "price", e.target.value)
                }
                placeholder="$ USD"
              />
            </div>
            <button
              onClick={() => handleRemove(service.id)}
              className="text-gray-500 hover:text-red-500 pt-6"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Button type="secondary" size="sm" onClick={handleAdd}>
          + Add Service
        </Button>
        <Button type="primary" size="lg" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </OnboardingCard>
  );
}
