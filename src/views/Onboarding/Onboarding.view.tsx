import React from "react";
import { OnboardingProps } from "./Onboarding.type";
import { FirstOnboardingView } from "./FirstOnboarding.view";
import { SecondOnboardingView } from "./SecondOnboarding.view";



export const OnboardingView = ({ item }: OnboardingProps) => {
  switch (item.id) {
    case "1":
      return <FirstOnboardingView />;
    case "2":
      return <SecondOnboardingView />;
    default:
      return null;
  }
};
