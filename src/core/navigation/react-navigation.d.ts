import type { AllNavigatorParamList } from "./routes/params";

declare global {
  namespace ReactNavigation {
    type RootParamList = AllNavigatorParamList;
  }
}
