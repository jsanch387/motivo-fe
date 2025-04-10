"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import Button from "@/app/components/ui/Button";
import TextInput from "@/app/components/ui/TextInput";
import { saveOnboardingProgress } from "../../api/saveOnboardingProgress";
import { GetOnboardingResponse } from "../../api/fetchOnboardingStatusWithData";
import { OnboardingData } from "../../types/onboarding.type";
import OnboardingCard from "../OnboardingCard";

type Props = {
  initialData: GetOnboardingResponse;
  onNext: () => void;
  onUpdate: (values: Partial<GetOnboardingResponse>) => void;
};

interface Tool {
  id: number;
  name: string;
  checked: boolean;
}

export default function Step6({ initialData, onNext, onUpdate }: Props) {
  const [tools, setTools] = useState<Tool[]>([]);
  const [nextId, setNextId] = useState(1);
  const [newTool, setNewTool] = useState("");

  useEffect(() => {
    if (initialData.tools && initialData.tools.length > 0) {
      const hydrated = (initialData.tools as (string | { name: string })[]).map(
        (tool, i) => ({
          id: i + 1,
          name: typeof tool === "string" ? tool : tool.name,
          checked: false,
        })
      );
      setTools(hydrated);
      setNextId(hydrated.length + 1);
    }
  }, [initialData.tools]);

  const toggleCheck = (id: number) => {
    setTools((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const handleRemove = (id: number) => {
    setTools((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAdd = () => {
    if (!newTool.trim()) return;
    setTools((prev) => [
      ...prev,
      { id: nextId, name: newTool.trim(), checked: false },
    ]);
    setNextId((prev) => prev + 1);
    setNewTool("");
  };

  const handleContinue = async () => {
    const formatted = tools.map((t) => t.name.trim()).filter(Boolean);
    const hasChanged =
      JSON.stringify(initialData.tools || []) !== JSON.stringify(formatted);

    const updated: Partial<OnboardingData> = {
      tools: formatted,
      current_step: 7,
    };

    onUpdate(updated);

    if (hasChanged) {
      await saveOnboardingProgress({
        ...defaultOnboardingData,
        ...initialData,
        ...updated,
      });
    }

    onNext(); // Step 7 will handle the loading + brand kit generation
  };

  return (
    <OnboardingCard title="🧰 Add your tools & gear">
      <div className="space-y-4 mb-10">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-center gap-4 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl"
          >
            <input
              type="checkbox"
              checked={tool.checked}
              onChange={() => toggleCheck(tool.id)}
              className="accent-blue-500 w-5 h-5"
            />
            <span
              className={`flex-1 text-base ${
                tool.checked ? "line-through text-gray-500" : "text-white"
              }`}
            >
              {tool.name}
            </span>
            <button
              onClick={() => handleRemove(tool.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-end gap-4 mb-10">
        <div className="flex-1">
          <TextInput
            label="Add a new tool"
            name="newTool"
            value={newTool}
            onChange={(e) => setNewTool(e.target.value)}
            placeholder="e.g. Water Tank, Polisher"
          />
        </div>
        <Button type="secondary" size="sm" onClick={handleAdd}>
          + Add Tool
        </Button>
      </div>

      <div className="text-right">
        <Button type="primary" size="lg" onClick={handleContinue}>
          Generate Brand Kit
        </Button>
      </div>
    </OnboardingCard>
  );
}

const defaultOnboardingData: OnboardingData = {
  current_step: 1,
  service_type: "",
  location: "",
  readiness_level: "",
  business_name_suggestions: [],
  selected_business_name: "",
  custom_name: "",
  brand_color_options: [],
  selected_color_palette: [],
  logo_style_options: ["Minimal", "Playful", "Bold"],
  selected_logo_style: "",
  selected_logo_id: "",
  services: [],
  tools: [],
  slogan: "",
};
