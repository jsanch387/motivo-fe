"use client";

import { useState } from "react";
import clsx from "clsx";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

interface TextInputProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  optional?: boolean;
}

export default function TextInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  optional = false,
}: TextInputProps) {
  const [touched, setTouched] = useState(false);
  const showError = touched && required && !value && error;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
          {label}
          {optional && (
            <span className="text-gray-500 text-sm ml-1">(optional)</span>
          )}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        className={clsx(
          "w-full bg-zinc-900 text-white border",
          "px-5 py-3 rounded-lg text-base",
          "focus:outline-none focus:ring-2",
          showError
            ? "border-red-500 focus:ring-red-600"
            : "border-zinc-700 focus:ring-blue-600"
        )}
      />

      {showError && (
        <div className="mt-2 text-sm text-white flex items-center gap-2">
          <ExclamationTriangleIcon className="h-4 w-4 text-red-400" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
