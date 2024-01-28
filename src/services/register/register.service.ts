import { RegisterFormBean } from 'src/components/organism/RegisterForm/RegisterForm';
import { prismaClient } from 'src/configs/prismaClient';
import { hashPassword } from 'src/utils/auth';

export const registerService = async ({ password, ...rest }: RegisterFormBean) => {
  const hashedPassword = await hashPassword(password);

  const register = await prismaClient.user.create({
    data: {
      password: hashedPassword,
      ...rest,
    },
  });

  return register;
};
