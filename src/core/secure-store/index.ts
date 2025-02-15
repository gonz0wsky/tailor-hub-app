import * as ExpoSecureStore from "expo-secure-store";

type SecureStoreKey = "token";

const get = async (key: SecureStoreKey) => ExpoSecureStore.getItemAsync(key);

const set = async (key: SecureStoreKey, value: string) =>
  ExpoSecureStore.setItemAsync(key, value);

const remove = async (key: SecureStoreKey) =>
  ExpoSecureStore.deleteItemAsync(key);

export const SecureStore = {
  get,
  set,
  remove,
};
