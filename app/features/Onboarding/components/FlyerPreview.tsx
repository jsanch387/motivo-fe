"use client";

import { BrandKit } from "../types/brandKit.type";

type Props = {
  brandKit: BrandKit;
};

export default function FlyerPreview({ brandKit }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl max-w-3xl mx-auto p-8 text-left">
      <h2 className="text-3xl font-bold text-black mb-2">
        ✨ {brandKit.business_name}
      </h2>
      <p className="text-gray-700 text-sm mb-6">
        {brandKit.service_type} in {brandKit.location}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-black">
            🔥 Spring Special
          </h3>
          <p className="text-gray-800 text-sm">
            Get a full interior + exterior detail for <strong>$79</strong>!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">
            🧼 Services Include:
          </h3>
          <ul className="list-disc ml-5 text-sm text-gray-800 space-y-1">
            <li>Exterior Hand Wash</li>
            <li>Interior Vacuum & Wipe-down</li>
            <li>Wax & Polish</li>
            <li>Window Tinting</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <div>
          <p className="text-xs text-gray-500">Call now: (512) 555-0123</p>
          <p className="text-xs text-gray-500">Book online at shinepro.com</p>
        </div>
        <div className="w-16 h-16 bg-black rounded-full text-white flex items-center justify-center text-xs font-semibold">
          LOGO
        </div>
      </div>
    </div>
  );
}
