import React from "react";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantDetailView } from "@features/restaurants/ui/RestaurantDetailView/RestaurantDetailView";
import { FavoritesView } from "@features/restaurants/ui/FavoritesView/FavoritesView";

import type { FavoritesNavigatorParamList } from "./routes/params";

const { Navigator, Screen } =
  createNativeStackNavigator<FavoritesNavigatorParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "ios_from_right",
} as const;

export const FavoritesNavigator = () => {
  return (
    <Navigator initialRouteName="Favorites" screenOptions={screenOptions}>
      <Screen name="Favorites" component={FavoritesView} />
      <Screen name="RestaurantDetail" component={RestaurantDetailView} />
    </Navigator>
  );
};
