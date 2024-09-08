const { PrismaClient } = require('@prisma/client');
import prismaRandom from 'prisma-extension-random';

const prismaClientSingleton = () => {
  return new PrismaClient().$extends(prismaRandom());
};

const prismaGlobal = global.prismaGlobal || prismaClientSingleton();

const prisma = prismaGlobal;

if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma;
}

module.exports = prisma;
