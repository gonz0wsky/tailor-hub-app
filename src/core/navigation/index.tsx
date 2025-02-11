import React from "react";
import type { LinkingOptions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";

import { paths } from "./routes/paths";
import type { AllNavigatorParamList } from "./routes/params";

import { PublicNavigator } from "./public-navigation";

export const Navigator = () => {
  const linking: LinkingOptions<AllNavigatorParamList> = {
    prefixes: [],
    config: {
      screens: paths,
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <PublicNavigator />
    </NavigationContainer>
  );
};
