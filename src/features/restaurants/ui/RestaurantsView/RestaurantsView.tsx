import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import { SafeAreaView } from "react-native";
import Header from "../shared/components/Header";
import RestaurantList from "../shared/components/RestaurantsList";
import { useRestaurantsViewModel } from "./useRestaurantsViewModel";
import IconButton from "../../../../shared/ui/components/IconButton";
import { fnWithId } from "@shared/utils/fnWithId";
import { useCallback } from "react";
import Map from "./Map";
import NavigateToCreateFloatingButton from "@shared/ui/layout/NavigateToCreateFloatingButton";

export const RestaurantsView: ScreenComponent<"Restaurants"> = () => {
  const { i18n } = useLingui();
  const t = useTheme();
  const {
    currentPage,
    handlePressFavoriteRestaurant,
    handlePressRestaurant,
    isRestaurantsLoading,
    restaurants,
    setCurrentPage,
    isRefetching,
    refetch,
    handleOnEndReached,
  } = useRestaurantsViewModel();

  const iconColor = useCallback(
    (selected: boolean) =>
      selected
        ? t.atoms.components.icon.color.primary.color
        : t.atoms.components.icon.color.primary_disabled.color,
    [
      t.atoms.components.icon.color.primary.color,
      t.atoms.components.icon.color.primary_disabled.color,
    ]
  );

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <NavigateToCreateFloatingButton>
        <Header title={i18n.t("Restaurantes")}>
          <IconButton
            name="map"
            size={24}
            color={iconColor(currentPage === "map")}
            onPress={fnWithId(setCurrentPage, "map")}
          />
          <IconButton
            name="list"
            size={24}
            color={iconColor(currentPage === "list")}
            onPress={fnWithId(setCurrentPage, "list")}
          />
        </Header>
        {currentPage === "list" && (
          <RestaurantList
            style={[a.mt_lg]}
            emptyMessage={i18n.t("No hay restaurantes")}
            isLoading={isRestaurantsLoading}
            onRestaurantFavoritePress={handlePressFavoriteRestaurant}
            onRestaurantPress={handlePressRestaurant}
            restaurants={restaurants}
            onRefresh={refetch}
            refreshing={isRefetching}
            onEndReached={handleOnEndReached}
          />
        )}
        {currentPage === "map" && <Map restaurants={restaurants} />}
      </NavigateToCreateFloatingButton>
    </SafeAreaView>
  );
};
