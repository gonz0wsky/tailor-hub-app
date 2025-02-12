import { msg } from "@lingui/core/macro";
import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, {
    message: msg`La contraseña debe tener al menos 6 caracteres`.message,
  });

export const isPassword = (value: string) =>
  passwordSchema.safeParse(value).success;

export const password = (value: string) => {
  if (!isPassword(value)) {
    throw new Error("Invalid password");
  }
  return value;
};
