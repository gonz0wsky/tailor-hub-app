import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import { SafeAreaView, Text, View } from "react-native";
import { useProfileViewModel } from "./useProfileViewModel";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import SoloInput from "./components/SoloInput";
import Button from "@shared/ui/components/Button";

export const ProfileView: ScreenComponent<"ProfileTab"> = () => {
  const { i18n } = useLingui();
  const t = useTheme();

  const { profile } = useProfileViewModel();

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <ScrollView style={[a.px_lg]} alwaysBounceVertical={false}>
        <View style={[a.align_center, a.justify_center, a.gap_sm]}>
          <Image
            source={{ uri: profile.avatar }}
            style={[{ height: 136, width: 136 }, a.rounded_full]}
          />
          <Text style={[a.font_s_semibold, t.atoms.text.primary]}>
            {profile.name}
          </Text>
        </View>
        <View style={[a.gap_5xl, a.mt_2xl]}>
          <SoloInput
            label={i18n.t("DNI")}
            onSubmit={() => {}}
            initialValue={profile.dni}
          />
          <SoloInput
            label={i18n.t("Fecha de nacimiento")}
            onSubmit={() => {}}
            initialValue={profile.birthday}
          />
          <SoloInput
            label={i18n.t("Dirección")}
            onSubmit={() => {}}
            initialValue={profile.address}
          />
          <Button title={i18n.t("Salir")} variant="secondary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
