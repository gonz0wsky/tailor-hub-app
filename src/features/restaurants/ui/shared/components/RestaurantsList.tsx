import { atoms as a, useTheme } from "@core/layout";
import { Restaurant } from "@features/restaurants/domain/RestaurantModel";
import { useLingui } from "@lingui/react";
import { fnWithId } from "@shared/utils/fnWithId";
import { FC, memo, useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageStyle,
  ListRenderItem,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import IconButton from "../../../../../shared/ui/components/IconButton";
import Score from "./Score";

const HORIZONTAL_CARD_WIDTH = 300;
const HORIZONTAL_CARD_SPACING = a.px_xs.paddingLeft + a.px_xs.paddingRight;

type CardProps = {
  onCardPress: (id: string) => void;
  onFavoritePress: (id: string) => void;
  restaurant: Restaurant;
  variant: "default" | "small";
};

const restaurantCardButtonStyle: Record<CardProps["variant"], ViewStyle[]> = {
  default: [a.px_lg],
  small: [a.px_sm, a.mx_xs, { borderRadius: 20, width: HORIZONTAL_CARD_WIDTH }],
} as const;

const restaurantCardContentStyle: Record<CardProps["variant"], ViewStyle[]> = {
  default: [a.my_sm],
  small: [],
} as const;

const restaurantCardImageStyle: Record<CardProps["variant"], ImageStyle[]> = {
  default: [{ height: 80, width: 80 }, a.rounded_lg],
  small: [{ height: 68, width: 68 }, a.rounded_lg],
} as const;

const RestaurantCard: FC<CardProps> = ({
  onCardPress,
  onFavoritePress,
  restaurant,
  variant = "default",
}) => {
  const { i18n } = useLingui();
  const t = useTheme();

  return (
    <RectButton
      testID={`restaurant-card-button-${restaurant.id}`}
      onPress={fnWithId(onCardPress, restaurant.id)}
      style={[
        restaurantCardButtonStyle[variant],
        a.flex_row,
        a.py_sm,
        t.atoms.background.primary,
      ]}
    >
      <Image
        style={[restaurantCardImageStyle[variant], a.mr_sm]}
        source={{ uri: restaurant.image }}
      />
      <View
        style={[
          a.flex_1,
          a.justify_between,
          restaurantCardContentStyle[variant],
        ]}
      >
        <Text numberOfLines={1} style={[a.font_xs_semibold]}>
          {restaurant.name}
        </Text>
        <Text numberOfLines={1} style={[a.font_xss_regular]}>
          {restaurant.address}
        </Text>
        <IconButton
          testID={`restaurant-card-like-button-${restaurant.id}`}
          style={[a.absolute, { right: 0 }]}
          onPress={fnWithId(onFavoritePress, restaurant.id)}
          name={restaurant.isFavorite ? "hearth-filled" : "hearth"}
        />
        <View style={[a.flex_row, a.align_center]}>
          <View style={[a.flex_row, a.gap_sm, a.mr_lg]}>
            <Score score={restaurant.score} iconSize={16} />
          </View>
          {variant === "default" && (
            <Text numberOfLines={1} style={[a.font_xss_regular]}>
              {`(${restaurant.score} ${i18n.t("Comentarios")})`}
            </Text>
          )}
        </View>
      </View>
    </RectButton>
  );
};

type RestaurantListProps = {
  emptyMessage?: string;
  horizontal?: boolean;
  isLoading?: boolean;
  onRestaurantFavoritePress: (id: string) => void;
  onRestaurantPress: (id: string) => void;
  restaurants: Restaurant[];
  style?: ViewStyle[];
};

const RestaurantList: FC<RestaurantListProps> = ({
  onRestaurantPress,
  onRestaurantFavoritePress,
  restaurants,
  isLoading,
  emptyMessage,
  horizontal = false,
  style,
}) => {
  const renderItem: ListRenderItem<Restaurant> = useCallback(
    ({ item }) => {
      return (
        <RestaurantCard
          onCardPress={onRestaurantPress}
          onFavoritePress={onRestaurantFavoritePress}
          restaurant={item}
          variant={horizontal ? "small" : "default"}
        />
      );
    },
    [horizontal, onRestaurantFavoritePress, onRestaurantPress]
  );

  if (emptyMessage && !isLoading && restaurants.length === 0) {
    return (
      <View style={[a.flex_1, a.align_center, a.justify_center]}>
        <Text style={[a.font_s_regular]}>{emptyMessage}</Text>
      </View>
    );
  }

  if (isLoading) {
    return <ActivityIndicator style={[a.absolute, a.inset_0]} />;
  }

  return (
    <FlatList
      contentContainerStyle={[horizontal && a.px_xs]}
      data={restaurants}
      decelerationRate="fast"
      horizontal={horizontal}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      snapToInterval={HORIZONTAL_CARD_WIDTH + HORIZONTAL_CARD_SPACING}
      style={[style]}
      testID="restaurants-list"
    />
  );
};

export default memo(RestaurantList);
