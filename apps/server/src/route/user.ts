import { Router, Request, Response } from "express";

import { UserResponse } from "@repo/schema/src/user";
import { prismaClient } from "@repo/database";

const router = Router();

// router.get("/", async (req: Request, res: Response) => {
//   try {
//     const users = await prismaClient.user.findMany();
//     res.json(users);
//   } catch (error) {
//     console.log(error);
//   }
// });

router.get("/", async (req: Request, res: Response) => {
  res.json({ userId: "1", name: "tanaka" });
});

export default router;
