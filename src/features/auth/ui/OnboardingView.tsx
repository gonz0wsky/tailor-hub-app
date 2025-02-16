import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import Button from "@shared/ui/components/Button";
import { Image, SafeAreaView, Text, View } from "react-native";
import { msg } from "@lingui/core/macro";
import { useStore } from "@core/store";

const WELCOME_TEXT = msg`Hola,
Bienvenido a la prueba de Tailor hub, en ella has de añadir los restaurantes favoritos donde te gustaría ir en tu onboarding.`;

export const OnboardingView: ScreenComponent<"Onboarding"> = () => {
  const { i18n } = useLingui();
  const t = useTheme();

  const setIsOnboardingCompleted = useStore(
    (state) => state.setIsOnboardingCompleted
  );

  const handlePress = () => {
    setIsOnboardingCompleted(true);
  };

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <View
        style={[
          a.flex_1,
          t.atoms.background.tertiary,
          a.m_lg,
          a.rounded_xl,
          a.align_center,
          a.justify_center,
        ]}
      >
        <View style={[a.align_center]}>
          <Image
            source={require("@assets/images/tailor-logo-with-text.png")}
            style={[{ width: 154, height: 35 }]}
          />
          <Text style={[a.mt_5xl, a.mx_2xl, a.text_center, a.font_s_regular]}>
            {i18n.t(WELCOME_TEXT)}
          </Text>
          <Button
            testID="onboarding-enter-button"
            size="small"
            style={[a.mt_2xl]}
            title={i18n.t("Entrar")}
            variant="secondary"
            onPress={handlePress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
