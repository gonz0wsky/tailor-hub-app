import { Restaurant } from "@features/restaurants/domain/Restaurant";
import { FC, memo } from "react";
import { View } from "react-native";
import { MapView } from "@maplibre/maplibre-react-native";
import { atoms as a, atoms } from "@core/layout";
import RestaurantsList from "../shared/components/RestaurantsList";

const OSM_MAP = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap Contributors",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm", // This must match the source key above
    },
  ],
} as const;

type Props = {
  restaurants: Restaurant[];
};

const Map: FC<Props> = ({ restaurants }) => {
  return (
    <View
      style={[
        a.flex_1,
        a.overflow_hidden,
        a.mt_2xl,
        { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
      ]}
    >
      <MapView style={{ flex: 1 }} mapStyle={OSM_MAP} />
      <RestaurantsList
        style={[atoms.absolute, { bottom: 48 }]}
        horizontal
        onRestaurantFavoritePress={() => {}}
        onRestaurantPress={() => {}}
        restaurants={restaurants}
      />
    </View>
  );
};

export default memo(Map);
