const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prismaGlobal = global.prismaGlobal || prismaClientSingleton();

const prisma = prismaGlobal;

if (process.env.NODE_ENV !== 'production') {
  global.prismaGlobal = prisma;
}

module.exports = prisma;
