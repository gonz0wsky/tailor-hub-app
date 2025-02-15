import type { SystemTheme } from "@core/layout/utils/useColorModeTheme";
import type { Language } from "@core/locale/locales/types";
import type { StateCreator } from "zustand";
import { sliceResetFns } from "./clearStorage";
import { Me } from "@shared/domain/Me";

export interface SystemSlice {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: SystemTheme;
  setTheme: (theme: SystemTheme) => void;
  isOnboardingCompleted: boolean;
  setIsOnboardingCompleted: (onboardingCompleted: boolean) => void;
  loggedUser: Me | null;
  setLoggedUser: (loggedUser: Me | null) => void;
}

const initialState: Pick<
  SystemSlice,
  "language" | "theme" | "isOnboardingCompleted" | "loggedUser"
> = {
  language: "en",
  theme: "system",
  isOnboardingCompleted: false,
  loggedUser: null,
};

const createSystemSlice: StateCreator<SystemSlice> = (set) => {
  sliceResetFns.add(() => set(() => initialState));

  return {
    ...initialState,
    setIsOnboardingCompleted: (onboardingCompleted: boolean) =>
      set(() => ({ isOnboardingCompleted: onboardingCompleted })),
    setLanguage: (language: Language) => set(() => ({ language })),
    setTheme: (theme: SystemTheme) => set(() => ({ theme })),
    setLoggedUser: (loggedUser: Me | null) => set(() => ({ loggedUser })),
  };
};

export default createSystemSlice;
