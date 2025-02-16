import { ScreenName } from "./params";

export const paths: Record<ScreenName, string> = {
  Onboarding: "/onboarding",
  SignIn: "/signin",

  FavoritesTab: "/restaurants/favorites",

  RestaurantsTab: "/restaurants",
  RestaurantCreate: "/restaurant/create",
  RestaurantDetail: "/restaurant/detail",
  Restaurants: "/restaurants/list",

  ProfileTab: "/user",
  Profile: "/user/profile",

  Favorites: "/restaurants/favorites",
} as const;
