"use client";

// import { PencilIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

interface Props {
  name: string;
  price: number;
  index: number;
  // onUpdate: (index: number, updated: { name: string; price: number }) => void;
  // onDelete: (index: number) => void;
}

export default function ServiceCardEditable({
  name,
  price,
}: // index,
// onUpdate,
// onDelete,
Props) {
  // const [editing, setEditing] = useState(false);
  // const [localName, setLocalName] = useState(name);
  // const [localPrice, setLocalPrice] = useState(price);

  // const handleSave = () => {
  //   onUpdate(index, { name: localName, price: localPrice });
  //   setEditing(false);
  // };

  return (
    <div className="relative border border-gray-700 bg-zinc-900 rounded-xl px-4 py-3 text-white text-sm flex justify-between items-start gap-2">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-blue-400 font-semibold">${price}</p>
      </div>

      {/* 
      <div className="flex flex-col gap-1">
        <button
          onClick={() => setEditing(true)}
          className="text-gray-400 hover:text-white"
        >
          <PencilIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(index)}
          className="text-red-500 hover:text-red-400"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
      */}
    </div>
  );
}
