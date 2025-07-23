// src/components/forms/ProductRequestForm.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"; // Import XCircleIcon for errors
import { submitRequestForm } from "./api/submitRequestForm";

interface ProductRequestFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  // Add any other props you might need for customization
}

export default function ProductRequestForm({
  title = "Get Your FREE Custom Product Bundle",
  subtitle = "Tell us about your audience, and we&apos;ll craft a professionally designed PDF guide + bonus resources (like a calendar or checklist) that you can immediately sell or share. Expect delivery within about a week.",
  buttonText = "Request My FREE Bundle",
}: ProductRequestFormProps) {
  const [form, setForm] = useState({
    email: "",
    niche: "",
    audienceQuestions: "",
  });
  // State to manage submission status: 'idle', 'submitting', 'success', 'error'
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  // State to manage error messages for display
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Ref to measure the initial height of the form content
  const formContentRef = useRef<HTMLDivElement>(null);
  const [minContainerHeight, setMinContainerHeight] = useState<
    number | undefined
  >(undefined);

  // Measure the initial height of the form content once on mount
  useEffect(() => {
    if (formContentRef.current && !minContainerHeight) {
      setMinContainerHeight(formContentRef.current.offsetHeight);
    }
  }, [minContainerHeight]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error message when user starts typing after an error
    setErrorMessage(null);
    if (submissionStatus === "error") {
      setSubmissionStatus("idle"); // Reset status if user starts correcting error
    }
  }

  // Basic frontend validation function
  const validateForm = (): boolean => {
    if (
      !form.email.trim() ||
      !form.niche.trim() ||
      !form.audienceQuestions.trim()
    ) {
      setErrorMessage("Please fill out all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    setErrorMessage(null); // Clear any previous error if validation passes
    return true;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Clear any existing error message before a new submission attempt
    setErrorMessage(null);

    // Frontend validation
    if (!validateForm()) {
      setSubmissionStatus("idle"); // Keep status idle if validation fails
      return;
    }

    setSubmissionStatus("submitting"); // Set status to submitting

    console.log("Form submission initiated for:", form.email);

    try {
      // ✅ Call your dedicated API function
      const response = await submitRequestForm(form);

      console.log(
        "Form submitted successfully! Backend message:",
        response.message
      );
      setSubmissionStatus("success");
      setForm({ email: "", niche: "", audienceQuestions: "" }); // Clear form on success
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Form submission failed:", error.message);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
      setSubmissionStatus("error");
    }
  }

  return (
    <div
      className="relative rounded-2xl border border-slate-200/50 bg-white p-8 shadow-2xl sm:p-10 flex flex-col justify-center items-center"
      style={{
        minHeight: minContainerHeight ? `${minContainerHeight}px` : "500px",
      }}
    >
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-indigo-400/25 to-purple-400/30 blur-xl" />

      {/* Success Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center p-8 sm:p-10
          transition-opacity duration-500 ease-in-out
          ${
            submissionStatus === "success"
              ? "opacity-100 z-10"
              : "opacity-0 -z-10 pointer-events-none"
          }`}
      >
        <CheckCircleIcon
          className="mx-auto h-24 w-24 text-green-500"
          aria-hidden="true"
        />
        <h2 className="mt-6 text-3xl font-bold text-slate-900 text-center">
          Success! Your Request is In.
        </h2>
        <p className="mt-4 text-lg text-slate-600 text-center">
          Thank you for sharing your vision! We&apos;ve received your details
          and are now crafting your custom digital product bundle.
        </p>
        <p className="mt-2 text-md text-slate-600 text-center">
          Keep an eye on your inbox &mdash; we&apos;ll email your bundle within
          about a week.
        </p>
      </div>

      {/* Form Content */}
      <div
        ref={formContentRef}
        className={`w-full
          transition-opacity duration-500 ease-in-out
          ${
            submissionStatus !== "success"
              ? "opacity-100 z-10"
              : "opacity-0 -z-10 pointer-events-none"
          }`}
      >
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Error Message Display */}
          {errorMessage && (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
              <XCircleIcon className="h-5 w-5 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Input
            label="Your Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
            disabled={submissionStatus === "submitting"}
          />
          <Input
            label="Your Niche / Content Area"
            name="niche"
            placeholder="e.g., Fitness, Skincare, Personal Finance&hellip;"
            value={form.niche}
            onChange={handleChange}
            required
            disabled={submissionStatus === "submitting"}
          />
          <Textarea
            label="Top 3-5 Questions Your Audience Asks"
            name="audienceQuestions"
            placeholder="e.g., 'How to treat oily skin?', 'Best way to start investing?', 'How to grow my hair faster?'"
            rows={3}
            value={form.audienceQuestions}
            onChange={handleChange}
            required
            disabled={submissionStatus === "submitting"}
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:from-indigo-500 hover:to-purple-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={submissionStatus === "submitting"}
          >
            {submissionStatus === "submitting" ? "Submitting..." : buttonText}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-slate-500">
          Free during beta &bull; No credit card needed &bull; We&apos;ll email
          your custom bundle
        </p>
      </div>
    </div>
  );
}

/* --- SMALL HELPER COMPONENTS --- */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
function Input({ label, name, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...rest}
        className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed"
      />
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
function Textarea({ label, name, ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-slate-600">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        {...rest}
        className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed"
      />
    </div>
  );
}
