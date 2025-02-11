import React from "react";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingView } from "@features/auth/ui/OnboardingView";

import type { PublicNavigatorParamList } from "./params";

const { Navigator, Screen } =
  createNativeStackNavigator<PublicNavigatorParamList>();

export const PublicNavigator = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "ios_from_right",
  } as const;

  return (
    <Navigator initialRouteName="Onboarding" screenOptions={screenOptions}>
      <Screen name="Onboarding" component={OnboardingView} />
    </Navigator>
  );
};
