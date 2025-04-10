"use client";

import { useState } from "react";
import {
  ChevronDownIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  required?: boolean;
  error?: string;
  optional?: boolean;
  placeholder?: string;
}

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
  optional = false,
  placeholder = "Select one",
}: SelectInputProps) {
  const [touched, setTouched] = useState(false);
  const showError = touched && required && !value && error;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm sm:text-base font-medium text-gray-300 mb-2"
        >
          {label}
          {optional && (
            <span className="text-gray-500 text-sm ml-1">(optional)</span>
          )}
        </label>
      )}

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setTouched(true);
          }}
          onBlur={() => setTouched(true)}
          className={clsx(
            "w-full appearance-none bg-zinc-900 text-white border px-5 py-3 pr-10 rounded-lg text-base",
            "focus:outline-none focus:ring-2 cursor-pointer transition",
            showError
              ? "border-red-500 focus:ring-red-600"
              : "border-zinc-700 focus:ring-blue-600 hover:border-blue-500"
          )}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {showError && (
        <div className="mt-2 text-sm text-white flex items-center gap-2">
          <ExclamationTriangleIcon className="h-4 w-4 text-red-400" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
