"use client";

import { useState } from "react";
import {
  ExclamationTriangleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface PasswordInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  optional?: boolean;
}

export default function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  optional = false,
}: PasswordInputProps) {
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);
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

      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={() => setTouched(true)}
          placeholder={placeholder}
          className={clsx(
            "w-full bg-zinc-900 text-white border",
            "px-5 py-3 rounded-lg text-base pr-12",
            "focus:outline-none focus:ring-2",
            showError
              ? "border-red-500 focus:ring-red-600"
              : "border-zinc-700 focus:ring-blue-600"
          )}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
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
