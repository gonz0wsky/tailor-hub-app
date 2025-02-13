import { atoms as a, useTheme } from "@core/layout";
import { Restaurant } from "@features/restaurants/domain/Restaurant";
import { useLingui } from "@lingui/react";
import Icon from "@shared/ui/components/Icon";
import { fnWithId } from "@shared/utils/fnWithId";
import { FC, memo, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  View,
} from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import IconButton from "./IconButton";

type CardProps = {
  onCardPress: (id: string) => void;
  onFavoritePress: (id: string) => void;
  restaurant: Restaurant;
};

const RestaurantCard: FC<CardProps> = ({
  restaurant,
  onCardPress,
  onFavoritePress,
}) => {
  const { i18n } = useLingui();
  const t = useTheme();

  return (
    <RectButton
      testID={`restaurant-card-button-${restaurant.id}`}
      onPress={fnWithId(onCardPress, restaurant.id)}
      style={[a.flex_row, a.px_lg, a.py_sm]}
    >
      <Image
        style={[{ height: 80, width: 80 }, a.rounded_lg, a.mr_sm]}
        source={{ uri: restaurant.image }}
      />
      <View style={[a.flex_1, a.py_sm]}>
        <Text numberOfLines={1} style={[a.font_xs_semibold]}>
          {restaurant.name}
        </Text>
        <Text numberOfLines={1} style={[a.font_xss_regular, a.mt_xs]}>
          {restaurant.address}
        </Text>
        <IconButton
          testID={`restaurant-card-like-button-${restaurant.id}`}
          style={[a.absolute, { top: 8, right: 0 }]}
          onPress={fnWithId(onFavoritePress, restaurant.id)}
          name={restaurant.isFavorite ? "hearth-filled" : "hearth"}
        />
        <View style={[a.mt_auto, a.flex_row, a.align_center]}>
          <View style={[a.flex_row, a.gap_sm, a.mr_lg]}>
            {Array.from({ length: restaurant.score.maxScore }).map((_, i) => (
              <Icon
                key={i}
                name="star-eight-point"
                size={16}
                color={
                  restaurant.score.value >= i + 1
                    ? t.atoms.components.icon.color.secondary.color
                    : t.atoms.components.icon.color.secondary_disabled.color
                }
              />
            ))}
          </View>
          <Text numberOfLines={1} style={[a.font_xss_regular]}>
            {`(${restaurant.score.value} ${i18n.t("Comentarios")})`}
          </Text>
        </View>
      </View>
    </RectButton>
  );
};

type RestaurantListProps = {
  isLoading?: boolean;
  onRestaurantClick: (id: string) => void;
  restaurants: Restaurant[];
};

const RestaurantList: FC<RestaurantListProps> = ({
  onRestaurantClick,
  restaurants,
  isLoading,
}) => {
  const renderItem: ListRenderItem<Restaurant> = useCallback(
    ({ item }) => {
      return (
        <RestaurantCard
          restaurant={item}
          onCardPress={onRestaurantClick}
          onFavoritePress={onRestaurantClick}
        />
      );
    },
    [onRestaurantClick]
  );

  if (isLoading) {
    return <ActivityIndicator style={[a.absolute, a.inset_0]} />;
  }

  return <FlatList renderItem={renderItem} data={restaurants} />;
};

export default memo(RestaurantList);
