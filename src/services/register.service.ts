import { PrismaClient } from '@prisma/client';

import { RegisterFormBean } from 'src/components/organism/RegisterForm/RegisterForm';

const prisma = new PrismaClient();

export const registerUser = async (registerData: RegisterFormBean) => {
  const register = await prisma.user.create({
    data: registerData,
  });
  await prisma.$disconnect();

  return register;
};
