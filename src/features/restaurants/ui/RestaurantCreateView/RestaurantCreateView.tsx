import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import Icon from "@shared/ui/components/Icon";
import { SafeAreaView, ScrollView } from "react-native";
import NewRestaurantForm from "./components/NewRestaurantForm";
import { useRestaurantCreateViewModel } from "./useRestaurantCreateViewModel";
import InfoState from "./components/InfoState";

export const RestaurantCreateView: ScreenComponent<"RestaurantCreate"> = () => {
  const t = useTheme();

  const { state } = useRestaurantCreateViewModel();

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      {state === "idle" && (
        <ScrollView alwaysBounceVertical={false}>
          <Icon
            style={[a.align_self_center]}
            name="logo"
            size={24}
            color={t.atoms.components.icon.color.secondary.color}
          />
          <NewRestaurantForm style={[a.mt_2xl, a.px_lg]} onSubmit={() => {}} />
        </ScrollView>
      )}
      {(state === "success" || state === "error") && (
        <InfoState state={state} onPress={() => {}} />
      )}
    </SafeAreaView>
  );
};
