import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import { SafeAreaView } from "react-native";
import Header from "../shared/components/Header";
import RestaurantsList from "../shared/components/RestaurantsList";
import { useFavoritesViewModel } from "./useFavoritesViewModel";
import NavigateToCreateFloatingButton from "@shared/ui/layout/NavigateToCreateFloatingButton";

export const FavoritesView: ScreenComponent<"FavoritesTab"> = () => {
  const { i18n } = useLingui();
  const t = useTheme();
  const {
    favorites,
    handlePressFavoriteRestaurant,
    handlePressRestaurant,
    isFavoritesLoading,
    isRefetching,
    refetch,
  } = useFavoritesViewModel();

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <NavigateToCreateFloatingButton>
        <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
          <Header title={i18n.t("Favoritos")} />
          <RestaurantsList
            style={[a.mt_lg]}
            emptyMessage={i18n.t("No hay restaurantes favoritos")}
            isLoading={isFavoritesLoading}
            onRestaurantPress={handlePressRestaurant}
            onRestaurantFavoritePress={handlePressFavoriteRestaurant}
            restaurants={favorites}
            onRefresh={refetch}
            refreshing={isRefetching}
          />
        </SafeAreaView>
      </NavigateToCreateFloatingButton>
    </SafeAreaView>
  );
};
