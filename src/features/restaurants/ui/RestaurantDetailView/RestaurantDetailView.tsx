import { ScreenComponent } from "@core/navigation/routes/params";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { useRestaurantDetailViewModel } from "./useRestaurantDetailViewModel";
import { atoms as a, atoms, useTheme } from "@core/layout";
import DetailHeader from "./components/DetailHeader";
import ReviewList from "./components/ReviewList";
import CommentCard from "./components/CommentCard";

export const RestaurantDetailView: ScreenComponent<"RestaurantDetail"> = ({
  route,
}) => {
  const t = useTheme();
  const {
    data,
    isLoading,
    handlePressBack,
    isRefetching,
    refetch,
    handleSubmitReview,
  } = useRestaurantDetailViewModel(route.params.id);

  if (isLoading || !data) {
    return (
      <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
        <ActivityIndicator style={[a.absolute, a.inset_0]} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <DetailHeader
        isFavorite={data.restaurant.isFavorite}
        image={data.restaurant.image}
        onPressBack={handlePressBack}
        onPressFavorite={() => {}}
        subtitle={data.restaurant.address}
        title={data.restaurant.name}
      />
      <ReviewList
        reviews={data.reviews}
        onPressEdit={() => {}}
        onPressDelete={() => {}}
        onRefresh={refetch}
        refreshing={isRefetching}
      >
        <View style={[a.mb_sm]}>
          <Text style={[atoms.font_xs_regular]}>{data.description}</Text>
          <CommentCard style={[atoms.mt_2xl]} onSubmit={handleSubmitReview} />
        </View>
      </ReviewList>
    </SafeAreaView>
  );
};
