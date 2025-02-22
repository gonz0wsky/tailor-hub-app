import React from "react";
import type { LinkingOptions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import { paths } from "./routes/paths";
import type { AllNavigatorParamList } from "./routes/params";

import { PublicNavigator } from "./public-navigation";
import { TabsNavigator } from "./tabs-navigation";
import { useStore } from "@core/store";

const linking: LinkingOptions<AllNavigatorParamList> = {
  prefixes: [],
  config: {
    screens: paths,
  },
};

export const Navigator = () => {
  const isLoggedIn = useStore((state) => state.loggedUser);

  return (
    <NavigationContainer linking={linking}>
      {!isLoggedIn && <PublicNavigator />}
      {isLoggedIn && <TabsNavigator />}
    </NavigationContainer>
  );
};
