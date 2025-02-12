import { msg } from "@lingui/core/macro";
import { z } from "zod";

export const nameSchema = z
  .string()
  .min(2, { message: msg`El nombre debe tener al menos 2 caracteres`.message });

export const isName = (value: string) => nameSchema.safeParse(value).success;

export const name = (value: string) => {
  if (!isName(value)) {
    throw new Error("Invalid name");
  }
  return value;
};
