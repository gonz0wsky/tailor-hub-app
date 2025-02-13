import React from "react";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OnboardingView } from "@features/auth/ui/OnboardingView";
import { SignInView } from "@features/auth/ui/SignInView/SignInView";

import type { PublicNavigatorParamList } from "./routes/params";

const { Navigator, Screen } =
  createNativeStackNavigator<PublicNavigatorParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "ios_from_right",
} as const;

export const PublicNavigator = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={screenOptions}>
      <Screen name="Onboarding" component={OnboardingView} />
      <Screen name="SignIn" component={SignInView} />
    </Navigator>
  );
};
