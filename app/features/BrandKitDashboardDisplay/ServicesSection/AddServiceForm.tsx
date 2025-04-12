"use client";

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

interface Props {
  onAdd: (service: { name: string; price: number }) => void;
}

export default function AddServiceForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const handleAdd = () => {
    if (!name.trim() || !price) return;
    onAdd({ name, price: Number(price) });
    setName("");
    setPrice("");
  };

  return (
    <div className="border border-dashed border-gray-600 rounded-xl px-4 py-4 mt-6 bg-zinc-900 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-zinc-800 text-white text-sm px-3 py-2 rounded border border-gray-700 w-full sm:w-1/2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value, 10) || "")}
        className="bg-zinc-800 text-white text-sm px-3 py-2 rounded border border-gray-700 w-full sm:w-1/4"
      />
      <button
        onClick={handleAdd}
        className="text-sm text-blue-400 hover:text-white flex items-center gap-1"
      >
        <PlusIcon className="w-4 h-4" />
        Add Service
      </button>
    </div>
  );
}
