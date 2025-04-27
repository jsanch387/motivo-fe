"use client";

import LockedToolsSection from "./LockedToolsSection";
import PaidToolsSection from "./PaidToolsSection";
import { Tool } from "@/app/features/Onboarding/types/brandKit.type";

interface Props {
  user_tools: Tool[];
  suggested_tools: Tool[];
  isLockedPreview?: boolean;
}

export default function ToolsSection({
  user_tools,
  suggested_tools,
  isLockedPreview = false,
}: Props) {
  if (isLockedPreview) {
    return (
      <LockedToolsSection
        user_tools={user_tools}
        suggested_tools={suggested_tools}
      />
    );
  }

  return (
    <PaidToolsSection
      user_tools={user_tools}
      suggested_tools={suggested_tools}
    />
  );
}
