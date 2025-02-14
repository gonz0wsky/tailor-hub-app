import { msg } from "@lingui/core/macro";
import { z } from "zod";

export const descriptionSchema = z
  .string()
  .min(3, {
    message: msg`Descripción no válida, requiere 3 caracteres`.message,
  });

export const isDescription = (value: string) =>
  descriptionSchema.safeParse(value).success;

export const description = (value: string) => {
  if (!isDescription(value)) {
    throw new Error("Invalid description");
  }
  return value;
};
