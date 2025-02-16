import { SecureStore } from "@core/secure-store";
import { AxiosInstance } from "axios";

export function loadSaveTokenInterceptor(client: AxiosInstance) {
  client.interceptors.response.use(
    async (response) => {
      const newAccessToken = response?.headers?.["authorization"];

      if (newAccessToken) {
        SecureStore.set("token", newAccessToken);
      }

      return response;
    },
    (error) => error
  );
}
