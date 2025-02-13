import { atoms as a, useSafeArea, useTheme } from "@core/layout/index";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC, useCallback } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { TabNavigatorParamList } from "../routes/params";
import Icon from "@shared/ui/components/Icon";
import { fnWithId } from "@shared/utils/fnWithId";
import { IconName } from "@shared/ui/components/Icon/types";

type TabScreen = keyof TabNavigatorParamList;

const icon: Record<TabScreen, IconName> = {
  FavoritesTab: "hearth",
  ProfileTab: "user",
  RestaurantsTab: "poi",
} as const;

export const BottomBar: FC<BottomTabBarProps> = ({ navigation, state }) => {
  const t = useTheme();
  const safe = useSafeArea();

  const Tab = useCallback(
    (route: BottomTabBarProps["state"]["routes"][0], index: number) => {
      const screen = route.name as TabScreen;
      const selected = state.index === index;

      const onPress = fnWithId<string>(navigation.navigate, route.name);

      const iconColor = selected
        ? t.atoms.components.icon.color.primary.color
        : t.atoms.components.icon.color.primary_disabled.color;

      return (
        <RectButton
          key={route.key}
          onPress={onPress}
          style={[
            {
              paddingBottom: Math.max(safe.bottom, 10),
              paddingTop: 10,
              height: 72,
            },
            a.flex_1,
            a.align_center,
          ]}
        >
          <View style={[a.align_center]}>
            <Icon name={icon[screen]} color={iconColor} size={32} />
          </View>
        </RectButton>
      );
    },
    [
      state.index,
      navigation.navigate,
      t.atoms.components.icon.color.primary.color,
      t.atoms.components.icon.color.primary_disabled.color,
      safe.bottom,
    ]
  );

  return (
    <View
      style={[a.flex_row, a.border_t_sm, t.atoms.components.bottombar.border]}
    >
      {state.routes.map(Tab)}
    </View>
  );
};
