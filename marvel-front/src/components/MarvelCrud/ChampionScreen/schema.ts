import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(1, "O nome é obrigatório.")
    .max(20, "O nome deve ter até 20 caracteres.")
    .nonempty(),
  description: z
    .string()
    .min(1, "A descrição é obrigatória.")
    .max(2000, "A descrição deve ter até 2000 caracteres.")
    .nonempty(),
  team: z.number().optional(),
  image: z.string().optional(),
  banner: z.string().optional(),
  skills: z.array(z.number()).optional(),
});

export default schema;
