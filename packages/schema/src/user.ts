import z from "zod";

const UserResponse = z.object({
  userId: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserResponse = z.infer<typeof UserResponse>;
