import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { FC } from "react";

export type PublicNavigatorParamList = {
  Onboarding: undefined;
  SignIn: undefined;
};

export type RestaurantNavigatorParamList = {
  RestaurantCreate: undefined;
  RestaurantDetail: { id: string };
  Restaurants: undefined;
};

export type ProfileNavigatorParamList = {
  Profile: undefined;
};

export type TabNavigatorParamList = {
  FavoritesTab: undefined;
  ProfileTab: undefined;
  RestaurantsTab: undefined;
};

export type AllNavigatorParamList = PublicNavigatorParamList &
  RestaurantNavigatorParamList &
  ProfileNavigatorParamList &
  TabNavigatorParamList;

export type ScreenName = keyof AllNavigatorParamList;

export type ScreenComponent<S extends ScreenName> = FC<
  NativeStackScreenProps<AllNavigatorParamList, S>
>;

export type ScreenRoute<S extends ScreenName> = FC<
  RouteProp<AllNavigatorParamList, S>
>;
