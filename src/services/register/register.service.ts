import { RegisterFormBean } from 'src/components/organism/RegisterForm/RegisterForm';
import { prismaClient } from 'src/configs/prismaClient';

export const registerService = async (registerData: RegisterFormBean) => {
  const register = await prismaClient.user.create({
    data: registerData,
  });

  return register;
};
