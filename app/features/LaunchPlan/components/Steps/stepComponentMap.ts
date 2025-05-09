import { FC } from "react";
import CreateProfileStep from "./CreateProfileStep";
import JoinGroupsStep from "./JoinGroupStep";
import PostFlyerStep from "./PostFlyerStep";

export const stepComponentMap: Record<string, FC> = {
  "create-profile": CreateProfileStep,
  "join-groups": JoinGroupsStep,
  "post-flyer": PostFlyerStep,
  //   "message-network": MessageNetworkStep,
  //   "first-offer": FirstOfferStep,
};
