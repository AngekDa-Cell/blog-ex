import { PrismaClient } from "../lib/generated/prisma";

declare global {
  // para prevenir múltiples instancias en desarrollo
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
