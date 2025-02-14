import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import Icon from "@shared/ui/components/Icon";
import { SafeAreaView, ScrollView } from "react-native";
import NewRestaurantForm from "./components/NewRestaurantForm";

export const RestaurantCreateView: ScreenComponent<"RestaurantCreate"> = () => {
  const t = useTheme();
  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <ScrollView alwaysBounceVertical={false}>
        <Icon
          style={[a.align_self_center]}
          name="logo"
          size={24}
          color={t.atoms.components.icon.color.secondary.color}
        />

        <NewRestaurantForm style={[a.mt_2xl, a.px_lg]} onSubmit={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};
