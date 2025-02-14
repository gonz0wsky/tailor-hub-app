import React from "react";
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsView } from "@features/restaurants/ui/RestaurantsView/RestaurantsView";
import { RestaurantDetailView } from "@features/restaurants/ui/RestaurantDetailView/RestaurantDetailView";
import { RestaurantCreateView } from "@features/restaurants/ui/RestaurantCreateView/RestaurantCreateView";

import type { RestaurantNavigatorParamList } from "./routes/params";

const { Navigator, Screen } =
  createNativeStackNavigator<RestaurantNavigatorParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "ios_from_right",
} as const;

export const RestaurantsNavigator = () => {
  return (
    <Navigator initialRouteName="Restaurants" screenOptions={screenOptions}>
      <Screen name="Restaurants" component={RestaurantsView} />
      <Screen name="RestaurantDetail" component={RestaurantDetailView} />
      <Screen name="RestaurantCreate" component={RestaurantCreateView} />
    </Navigator>
  );
};
