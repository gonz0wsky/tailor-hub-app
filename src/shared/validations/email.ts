import { msg } from "@lingui/core/macro";
import { z } from "zod";

export const emailSchema = z
  .string()
  .email({ message: msg`Correo no valido`.message });

export const isEmail = (value: string) => emailSchema.safeParse(value).success;

export const email = (value: string) => {
  if (!isEmail(value)) {
    throw new Error("Invalid email");
  }
  return value;
};
