import { signupInput } from './zod';
import z from "zod";

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

// tyep inference in zod
export type signupInput = z.infer<typeof signupInput>;

