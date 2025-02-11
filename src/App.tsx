import { useStore } from "@core/store";
import { useColorModeTheme } from "@core/layout/utils/useColorModeTheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@core/layout";
import { GestureProvider } from "@core/layout/GestureProvider";
import { I18nProvider } from "@core/locale/i18nProvider";
import { Navigator } from "@core/navigation";
import { StatusBar } from "react-native";
import { statusBarStyle } from "@core/layout/themes";
import { QueryClientProvider } from "@core/query-client/QueryClientProvider";
import { useFonts } from "@core/layout/useFonts";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const InnerApp = () => {
  const themeName = useStore((s) => s.theme);
  const theme = useColorModeTheme(themeName);
  const [fontsLoaded] = useFonts();

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <GestureProvider>
          <I18nProvider>
            <Navigator />
            <StatusBar barStyle={statusBarStyle[theme]} />
          </I18nProvider>
        </GestureProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const App = () => {
  return (
    <QueryClientProvider>
      <InnerApp />
    </QueryClientProvider>
  );
};

export default App;
