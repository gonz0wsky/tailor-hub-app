import type { StateCreator } from "zustand";
import { sliceResetFns } from "./clearStorage";
import { Restaurant } from "@features/restaurants/domain/RestaurantModel";

export interface FavoritesSlice {
  favoriteRestaurants: Restaurant[];
  addFavoriteRestaurant: (restaurant: Restaurant) => void;
  removeFavoriteRestaurant: (id: string) => void;
}

const initialState: Pick<FavoritesSlice, "favoriteRestaurants"> = {
  favoriteRestaurants: [],
};

const createFavoritesSlice: StateCreator<FavoritesSlice> = (set) => {
  sliceResetFns.add(() => set(() => initialState));

  return {
    ...initialState,
    addFavoriteRestaurant: (restaurant: Restaurant) =>
      set((state) => ({
        favoriteRestaurants: [...state.favoriteRestaurants, restaurant],
      })),
    removeFavoriteRestaurant: (id: string) =>
      set((state) => ({
        favoriteRestaurants: state.favoriteRestaurants.filter(
          (restaurant) => restaurant.id !== id
        ),
      })),
  };
};

export default createFavoritesSlice;
