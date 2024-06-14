import { Prisma, PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const customGlobalThis = globalThis as typeof globalThis & {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
};
const prismaClient = customGlobalThis.prismaGlobal ?? prismaClientSingleton();

export { prismaClient };
