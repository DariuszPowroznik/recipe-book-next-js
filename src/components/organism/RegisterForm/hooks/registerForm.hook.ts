import { useMutation } from '@tanstack/react-query';

import http from 'src/configs/axiosConfig';
import { apiPaths } from 'src/shared/const/apiPaths';

import { RegisterFormBean } from '../RegisterForm';

const postRegister = (registerData: RegisterFormBean) =>
  http.post(apiPaths.register, registerData).then(res => res);

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: (registerDate: RegisterFormBean) => postRegister(registerDate),
  });
