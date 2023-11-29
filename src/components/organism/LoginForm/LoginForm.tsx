'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { translations } from 'src/shared/const/translations';
import { validators } from 'src/shared/validators';

import styled from './Login.module.scss';

const text = translations.pl;

export interface LoginFormBean {
  name: string;
  surname: string;
  password: string;
  email: string;
}

const schema = z.object({
  name: validators.name,
  surname: validators.surname,
  password: validators.loginPassword,
  email: validators.email,
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormBean>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
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
        autoFocus
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
