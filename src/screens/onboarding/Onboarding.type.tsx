import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Onboarding: undefined;
  Paywall: undefined;
};

export type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Onboarding">;
};
