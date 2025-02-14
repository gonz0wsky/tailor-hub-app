import { atoms, useTheme } from "@core/layout";
import { FC, memo, useCallback } from "react";
import IconButton from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";

type Props = {
  children: React.ReactNode;
};

const NavigateToCreateFloatingButton: FC<Props> = ({ children }) => {
  const t = useTheme();
  const { navigate } = useNavigation();

  const handlePress = useCallback(() => {
    //@ts-expect-error types error, this navigation works
    navigate("RestaurantsTab", { screen: "RestaurantCreate" });
  }, [navigate]);

  return (
    <>
      {children}
      <IconButton
        name="plus"
        onPress={handlePress}
        size={32}
        color={t.atoms.components.icon.color.tertiary.color}
        style={[
          { height: 56, width: 56 },
          t.atoms.background.secondary,
          atoms.align_center,
          atoms.justify_center,
          atoms.absolute,
          { bottom: 8, right: 16 },
        ]}
      />
    </>
  );
};

export default memo(NavigateToCreateFloatingButton);
