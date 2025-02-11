import { Platform } from "react-native";

export function web<T = unknown>(value: T) {
  return Platform.select<T>({
    web: value,
  });
}

export function ios<T = unknown>(value: T) {
  return Platform.select<T>({
    ios: value,
  });
}

export function android<T = unknown>(value: T) {
  return Platform.select<T>({
    android: value,
  });
}

export function native<T = unknown>(value: T) {
  return Platform.select<T>({
    native: value,
  });
}
