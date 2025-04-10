"use client";

import { LightBulbIcon } from "@heroicons/react/24/outline";

export default function WhatsNextSection() {
  return (
    <div className="bg-[rgba(255,255,255,0.03)] border border-blue-900 rounded-xl p-6 shadow-sm space-y-3">
      <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg mb-1">
        <LightBulbIcon className="w-5 h-5" />
        What’s Next?
      </div>
      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
        <li>✅ Post your flyer on Facebook Marketplace</li>
        <li>✅ Share your brand on Instagram or TikTok</li>
        <li>✅ Print your flyer and offer a first-time discount</li>
        <li>✅ Use this checklist to get your first 3 customers</li>
        <li>✅ Link your logo to a landing page (coming soon)</li>
      </ul>
    </div>
  );
}
