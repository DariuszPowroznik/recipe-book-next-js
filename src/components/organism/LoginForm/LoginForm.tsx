'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { translations } from 'src/shared/const/translations';
import { loginSchema } from 'src/shared/schemas/login.schema';

import styled from './Login.module.scss';

const text = translations.pl;

export interface LoginFormBean {
  name: string;
  surname: string;
  password: string;
  email: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormBean>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormBean> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label={text.common.email}
        type="email"
        autoComplete="email"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        required
        {...register('email')}
      />
      <TextField
        margin="normal"
        fullWidth
        id="password"
        label={text.authentication.password}
        type="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        required
        {...register('password')}
      />
      <Button className={styled.marginTop} type="submit" variant="contained" fullWidth size="large">
        {text.authentication.loginButton}
      </Button>
    </form>
  );
};
