import { SecureStore } from "@core/secure-store";
import { clearStore } from "@core/store/clearStorage";
import { AxiosInstance } from "axios";

export function loadRefreshTokenInterceptor(client: AxiosInstance) {
  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await client.get("/auth/refresh-token");

          const newRefreshToken = response.headers["authorization"];

          if (!newRefreshToken) {
            throw new Error("No refresh token returned from the server.");
          }

          SecureStore.set("token", newRefreshToken);

          originalRequest.headers["authorization"] = newRefreshToken;

          return client(originalRequest);
        } catch (refreshError) {
          SecureStore.remove("token");
          clearStore();

          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
}
