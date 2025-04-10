"use client";

import { useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

interface Service {
  name: string;
  price: number;
  source?: "user" | "ai";
}

interface Props {
  services: Service[];
}

export default function ServicesSection({ services: allServices }: Props) {
  const userServices = allServices.filter((s) => s.source !== "ai");
  const aiServices = allServices.filter((s) => s.source === "ai");

  const [tab, setTab] = useState<"user" | "ai">("user");
  const [services, setServices] = useState<Service[]>(userServices);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newService, setNewService] = useState<Service>({ name: "", price: 0 });

  const handleDelete = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSave = (index: number) => {
    setEditingIndex(null);
  };

  const handleAddService = () => {
    if (!newService.name.trim() || !newService.price) return;
    setServices([...services, newService]);
    setNewService({ name: "", price: 0 });
  };

  const activeServices = tab === "user" ? services : aiServices;

  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setTab("user")}
          className={`text-sm px-3 py-1 rounded-md ${
            tab === "user"
              ? "bg-zinc-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Your Services
        </button>
        <button
          onClick={() => setTab("ai")}
          className={`text-sm px-3 py-1 rounded-md ${
            tab === "ai"
              ? "bg-zinc-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Recommended Services
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {activeServices.map((service, i) => (
          <div
            key={i}
            className="relative border border-gray-700 bg-zinc-900 rounded-xl px-4 py-3 text-white text-sm flex justify-between items-start gap-2"
          >
            {editingIndex === i && tab === "user" ? (
              <div className="flex flex-col gap-1 w-full">
                <input
                  className="bg-zinc-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
                  value={service.name}
                  onChange={(e) => {
                    const updated = [...services];
                    updated[i].name = e.target.value;
                    setServices(updated);
                  }}
                />
                <input
                  type="number"
                  className="bg-zinc-800 text-white text-sm px-2 py-1 rounded border border-gray-700"
                  value={service.price}
                  onChange={(e) => {
                    const updated = [...services];
                    updated[i].price = parseInt(e.target.value, 10);
                    setServices(updated);
                  }}
                />
                <button
                  onClick={() => handleSave(i)}
                  className="text-green-400 text-xs mt-1 hover:underline flex items-center gap-1"
                >
                  <CheckIcon className="w-4 h-4" /> Save
                </button>
              </div>
            ) : (
              <>
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-blue-400 font-semibold">
                    ${service.price}
                  </p>
                </div>

                {tab === "user" && (
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => handleEdit(i)}
                      className="text-gray-400 hover:text-white"
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Sparkle icon centered on right side */}
                {tab === "ai" && service.source === "ai" && (
                  <SparklesIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-300" />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Add Service UI (user tab only) */}
      {tab === "user" && (
        <div className="border border-dashed border-gray-600 rounded-xl px-4 py-4 bg-zinc-900 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) =>
              setNewService({ ...newService, name: e.target.value })
            }
            className="bg-zinc-800 text-white text-sm px-3 py-2 rounded border border-gray-700 w-full sm:w-1/2"
          />
          <input
            type="number"
            placeholder="Price"
            value={newService.price}
            onChange={(e) =>
              setNewService({
                ...newService,
                price: parseInt(e.target.value, 10),
              })
            }
            className="bg-zinc-800 text-white text-sm px-3 py-2 rounded border border-gray-700 w-full sm:w-1/4"
          />
          <button
            onClick={handleAddService}
            className="text-sm text-blue-400 hover:text-white flex items-center gap-1"
          >
            <PlusIcon className="w-4 h-4" />
            Add Service
          </button>
        </div>
      )}
    </div>
  );
}
