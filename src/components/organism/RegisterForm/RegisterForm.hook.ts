import { useMutation } from '@tanstack/react-query';

import { apiPaths } from 'src/shared/const/apiPaths';
import http from 'src/utils/axiosConfig';

import { RegisterFormBean } from './RegisterForm';

const postRegister = (registerData: RegisterFormBean) =>
  http
    .post(apiPaths.register, registerData)
    .then(res => console.log(res))
    .catch(err => console.log(err));

export const useRegisterCommand = () =>
  useMutation({
    mutationFn: (registerDate: RegisterFormBean) => postRegister(registerDate),
  });
