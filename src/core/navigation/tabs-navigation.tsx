import React, { useCallback } from "react";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants-navigation";

import type { TabNavigatorParamList } from "./routes/params";
import { FavoritesView } from "@features/restaurants/ui/FavoritesView/FavoritesView";
import { ProfileView } from "@features/profile/ui/ProfileView/ProfileView";
import { BottomBar } from "./ui/BottomBar";

const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamList>();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
} as const;

export const TabsNavigator = () => {
  const tabBar = useCallback(
    (props: BottomTabBarProps) => <BottomBar {...props} />,
    []
  );

  return (
    <Navigator
      initialRouteName="RestaurantsTab"
      tabBar={tabBar}
      screenOptions={screenOptions}
    >
      <Screen name="RestaurantsTab" component={RestaurantsNavigator} />
      <Screen name="FavoritesTab" component={FavoritesView} />
      <Screen name="ProfileTab" component={ProfileView} />
    </Navigator>
  );
};
