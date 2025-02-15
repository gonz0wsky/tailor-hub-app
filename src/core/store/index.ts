import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { storage } from "./storage";

import type { SystemSlice } from "./useSystemSlice";
import createSystemSlice from "./useSystemSlice";
import type { FavoritesSlice } from "./useFavoritesSlice";
import createFavoritesSlice from "./useFavoritesSlice";

type Slices = SystemSlice & FavoritesSlice;

export const useStore = create<Slices>()(
  persist(
    (...a) => ({
      ...createSystemSlice(...a),
      ...createFavoritesSlice(...a),
    }),
    {
      name: "storage",
      version: 1,
      storage: createJSONStorage(() => storage),
    }
  )
);
