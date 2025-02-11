import { atoms as a } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import { Text, View } from "react-native";

export const OnboardingView: ScreenComponent<"Onboarding"> = () => {
  const { i18n } = useLingui();
  return (
    <View style={[a.flex_1, a.align_center, a.justify_center]}>
      <Text style={[a.font_body_one]}>{i18n.t("Onboarding")}</Text>
    </View>
  );
};
