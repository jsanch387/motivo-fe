"use client";

import { useState } from "react";
import apiClient from "@/lib/api/apiClient";

/**
 * POC – Checklist generator
 * After the creator likes their guide, they can spin up a printable checklist add‑on.
 */
export default function CreatorChecklistForm() {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  /* ---------- form state ---------- */
  const [niche, setNiche] = useState("skincare & beauty");
  const [audience, setAudience] = useState("women with combination skin");
  const [checklistFocus, setChecklistFocus] = useState(
    "Monthly Glow‑Up Checklist"
  );
  const [tone, setTone] = useState("friendly, slightly sassy");
  const [extraNotes, setExtraNotes] = useState("Make it beginner friendly; ");
  /* -------------------------------- */

  const handleGenerate = async () => {
    if (loading) return;
    setLoading(true);
    setPdfUrl(null);

    /* For MVP we wrap these answers in the same `questionnaire`
       shape the backend already knows. Later you can attach guide JSON, too. */
    const questionnaire = {
      content_type: tone,
      niche,
      audience,
      top_questions: [checklistFocus], // simple reuse
      mini_class: checklistFocus,
      main_struggle: "", // not needed for checklist
      extra_notes: extraNotes,
    };

    try {
      const res = await apiClient.post(
        "/ai/generate-checklist",
        { questionnaire },
        { responseType: "blob" }
      );

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setPdfUrl(url);
      window.open(url, "_blank");
    } catch (err) {
      console.error("Checklist generation failed:", err);
      alert("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Generate a Checklist Add‑On</h1>

      {/* Niche */}
      <Input
        label="Niche / Topic"
        value={niche}
        onChange={setNiche}
        placeholder="e.g. personal finance, skincare, fitness"
      />

      {/* Audience */}
      <Input
        label="Intended audience"
        value={audience}
        onChange={setAudience}
        placeholder="e.g. millennial side‑hustlers"
      />

      {/* Checklist focus */}
      <Input
        label="Checklist focus (title idea)"
        value={checklistFocus}
        onChange={setChecklistFocus}
        placeholder="e.g. Weekly Debt‑Payoff Checklist"
      />

      {/* Tone */}
      <Input
        label="Tone / style"
        value={tone}
        onChange={setTone}
        placeholder="e.g. motivational, friendly, step‑by‑step"
      />

      {/* Extra notes */}
      <Textarea
        label="Extra notes or link to include (optional)"
        value={extraNotes}
        onChange={setExtraNotes}
      />

      {/* Submit */}
      <button
        disabled={loading}
        onClick={handleGenerate}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Generating…" : "Generate Checklist"}
      </button>

      {pdfUrl && (
        <div className="pt-4 text-center">
          <p className="text-green-600 font-medium">✅ Checklist ready!</p>
          <a href={pdfUrl} target="_blank" className="underline text-blue-600">
            View / Download Again
          </a>
        </div>
      )}
    </div>
  );
}

/* ---------- tiny reusable inputs ---------- */
function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="block font-medium">{label}</label>
      <input
        className="w-full border rounded px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (s: string) => void;
}) {
  return (
    <div className="space-y-1">
      <label className="block font-medium">{label}</label>
      <textarea
        className="w-full border rounded px-3 py-2 min-h-[96px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
