import { z } from "zod";

export const schema = z.object({
  name: z.string().max(20).nonempty(),
  description: z.string().max(2000).nonempty(),
  team: z.number().optional(),
  image: z.string().optional(),
  banner: z.string().optional(),
  skills: z.array(z.number()).optional(),
});
