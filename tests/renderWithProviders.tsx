import { render } from "@testing-library/react-native";
import type { ReactNode } from "react";
import { I18nProvider } from "@core/locale/i18nProvider";

const TestProviders = ({ children }: { children: ReactNode }) => {
  return <I18nProvider>{children}</I18nProvider>;
};

const renderWithProviders = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: TestProviders, ...options });

export { renderWithProviders };
