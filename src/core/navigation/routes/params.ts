import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { FC } from "react";

export type PublicNavigatorParamList = {
  Onboarding: undefined;
  SignIn: undefined;
};

export type RestaurantNavigatorParamList = {
  RestaurantCreate: undefined;
  RestaurantDetail: { id: string };
  RestaurantsList: undefined;
};

export type UserNavigatorParamList = {
  UserProfile: undefined;
};

export type AllNavigatorParamList = PublicNavigatorParamList &
  RestaurantNavigatorParamList &
  UserNavigatorParamList;

export type ScreenName = keyof AllNavigatorParamList;

export type ScreenComponent<S extends ScreenName> = FC<
  NativeStackScreenProps<AllNavigatorParamList, S>
>;
