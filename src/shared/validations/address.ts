import { msg } from "@lingui/core/macro";
import { z } from "zod";

export const addressSchema = z
  .string()
  .min(3, { message: msg`Dirección no válida, requiere 3 caracteres`.message });

export const isAddress = (value: string) =>
  addressSchema.safeParse(value).success;

export const address = (value: string) => {
  if (!isAddress(value)) {
    throw new Error("Invalid address");
  }
  return value;
};
