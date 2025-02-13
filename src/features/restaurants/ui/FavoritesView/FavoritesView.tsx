import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import { SafeAreaView, Text } from "react-native";

export const FavoritesView: ScreenComponent<"FavoritesTab"> = () => {
  const { i18n } = useLingui();
  const t = useTheme();
  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <Text>FavoritesView</Text>
    </SafeAreaView>
  );
};
