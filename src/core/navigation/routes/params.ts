import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { FC } from "react";

export type SharedNavigatorParamList = {
  RestaurantDetail: { id: string };
};

export type PublicNavigatorParamList = {
  Onboarding: undefined;
  SignIn: undefined;
};

export type RestaurantNavigatorParamList = {
  RestaurantCreate: undefined;
  Restaurants: undefined;
} & SharedNavigatorParamList;

export type FavoritesNavigatorParamList = {
  Favorites: undefined;
} & SharedNavigatorParamList;

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
  TabNavigatorParamList &
  FavoritesNavigatorParamList;

export type ScreenName = keyof AllNavigatorParamList;

export type ScreenComponent<S extends ScreenName> = FC<
  NativeStackScreenProps<AllNavigatorParamList, S>
>;

export type ScreenRoute<S extends ScreenName> = FC<
  RouteProp<AllNavigatorParamList, S>
>;
