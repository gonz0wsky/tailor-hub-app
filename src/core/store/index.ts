import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { storage } from "./storage";

import type { SystemSlice } from "./useSystemSlice";
import createSystemSlice from "./useSystemSlice";

type Slices = SystemSlice;

export const useStore = create<Slices>()(
  persist(
    (...a) => ({
      ...createSystemSlice(...a),
    }),
    {
      name: "storage",
      version: 1,
      storage: createJSONStorage(() => storage),
    }
  )
);
