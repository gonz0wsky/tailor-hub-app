import { useFonts as useExpoFonts } from "expo-font";

export const useFonts = () =>
  useExpoFonts({
    "Roobert-Bold": require("@assets/fonts/Roobert-Bold.otf"),
    "Roobert-Medium": require("@assets/fonts/Roobert-Medium.otf"),
    "Roobert-Regular": require("@assets/fonts/Roobert-Regular.otf"),
    "Roobert-SemiBold": require("@assets/fonts/Roobert-SemiBold.otf"),
  });
