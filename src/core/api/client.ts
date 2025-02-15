import { CONFIG } from "@core/config/config";
import axios from "axios";
import { loadInjectTokenInterceptor } from "./interceptors/inject-token";
import { loadRefreshTokenInterceptor } from "./interceptors/refresh-token";
import { loadSaveTokenInterceptor } from "./interceptors/save-token";

export const client = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

loadInjectTokenInterceptor(client);
loadRefreshTokenInterceptor(client);
loadSaveTokenInterceptor(client);
