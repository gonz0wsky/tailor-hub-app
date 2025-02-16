import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { useLingui } from "@lingui/react";
import { SafeAreaView, Text, View } from "react-native";
import { useProfileViewModel } from "./useProfileViewModel";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import SoloInput from "./components/SoloInput";
import Button from "@shared/ui/components/Button";
import NavigateToCreateFloatingButton from "@shared/ui/layout/NavigateToCreateFloatingButton";

export const ProfileView: ScreenComponent<"ProfileTab"> = ({ navigation }) => {
  const { i18n } = useLingui();
  const t = useTheme();

  const {
    profile,
    isLogoutLoading,
    handlePressLogout,
    handleUpdateAddress,
    handleUpdateBirthday,
    handleUpdateDni,
  } = useProfileViewModel();

  if (!profile) {
    return null; // profile must be loaded
  }

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <NavigateToCreateFloatingButton>
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
              testID="form-dni"
              label={i18n.t("DNI")}
              onSubmit={handleUpdateDni}
              initialValue={profile.dni}
            />
            <SoloInput
              testID="form-birthday"
              label={i18n.t("Fecha de nacimiento")}
              onSubmit={handleUpdateBirthday}
              initialValue={profile.birthday}
            />
            <SoloInput
              testID="form-address"
              label={i18n.t("Dirección")}
              onSubmit={handleUpdateAddress}
              initialValue={profile.address}
            />
            <Button
              testID="logout-button"
              title={i18n.t("Salir")}
              variant="secondary"
              onPress={handlePressLogout}
              loading={isLogoutLoading}
            />
          </View>
        </ScrollView>
      </NavigateToCreateFloatingButton>
    </SafeAreaView>
  );
};
