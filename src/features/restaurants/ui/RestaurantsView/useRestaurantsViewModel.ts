import { useRestaurantsQuery } from "@features/restaurants/data/useRestaurantsQuery";
import { useState } from "react";

export const useRestaurantsViewModel = () => {
  const { data, isLoading } = useRestaurantsQuery();

  const [currentPage, setCurrentPage] = useState<"map" | "list">("list");

  return {
    currentPage,
    isRestaurantsLoading: isLoading,
    restaurants: data ?? [],
    setCurrentPage,
  };
};
