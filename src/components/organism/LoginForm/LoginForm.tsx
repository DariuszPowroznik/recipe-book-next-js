'use client';

import { TextField, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { translations } from 'src/shared/const/translations';

import styled from './Login.module.scss';

const text = translations.pl;

interface LoginFormBean {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormBean>();
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
        autoFocus
        {...register('email')}
      />
      <TextField
        margin="normal"
        fullWidth
        id="password"
        label={text.authentication.password}
        type="password"
        autoComplete="password"
        {...register('password')}
      />
      <Button className={styled.marginTop} type="submit" variant="contained" fullWidth size="large">
        {text.authentication.loginButton}
      </Button>
    </form>
  );
};
