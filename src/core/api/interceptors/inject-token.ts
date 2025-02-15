import { SecureStore } from "@core/secure-store";
import { AxiosInstance } from "axios";

export function loadInjectTokenInterceptor(client: AxiosInstance) {
  client.interceptors.request.use(
    async (request) => {
      const accessToken = await SecureStore.get("token");
      if (accessToken) {
        request.headers["authorization"] = `Bearer ${accessToken}`;
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
