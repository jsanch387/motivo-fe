// 📁 components/dashboard/PreviewCard.tsx
"use client";

import Button from "@/app/components/ui/Button";

export default function PreviewCard({
  title,
  status,
  cta,
}: {
  title: string;
  status: string;
  cta: string;
}) {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-gray-800 rounded-xl p-5 shadow-sm backdrop-blur-sm flex flex-col justify-between min-h-[180px]">
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{status}</p>
      </div>
      <div className="mt-6">
        <Button type="secondary" size="sm">
          {cta}
        </Button>
      </div>
    </div>
  );
}
