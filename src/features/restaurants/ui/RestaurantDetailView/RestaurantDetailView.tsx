import { ScreenComponent } from "@core/navigation/routes/params";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { Image } from "expo-image";
import { useRestaurantDetailViewModel } from "./useRestaurantDetailViewModel";
import { atoms as a } from "@core/layout";
import IconButton from "../shared/components/IconButton";
import DetailHeader from "./DetailHeader";

export const RestaurantDetailView: ScreenComponent<"RestaurantDetail"> = ({
  route,
}) => {
  const { data, isLoading } = useRestaurantDetailViewModel("1");

  if (isLoading || !data) {
    return <ActivityIndicator style={[a.absolute, a.inset_0]} />;
  }

  return (
    <SafeAreaView style={[]}>
      <DetailHeader
        image={data.restaurant.image}
        onPressBack={() => {}}
        onPressFavorite={() => {}}
        subtitle={data.restaurant.address}
        title={data.restaurant.name}
      />
    </SafeAreaView>
  );
};
