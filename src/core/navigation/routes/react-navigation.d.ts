import type { AllNavigatorParamList } from "./params";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllNavigatorParamList {}
  }
}
