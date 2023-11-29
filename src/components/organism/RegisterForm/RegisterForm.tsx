'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Typography, TextField, Button, Link } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { translations } from 'src/shared/const/translations';
import { validators } from 'src/shared/validators';

import { useRegisterCommand } from '../RegisterForm/RegisterForm.hook';

const text = translations.pl;

export interface RegisterFormBean {
  name: string;
  surname: string;
  password: string;
  email: string;
}

const schema = z.object({
  name: validators.name,
  surname: validators.surname,
  password: validators.password,
  email: validators.email,
});

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormBean>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });
  const { mutate, isPending } = useRegisterCommand();
  const onSubmit: SubmitHandler<RegisterFormBean> = data => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="name"
        size="medium"
        label={text.common.name}
        autoComplete="name"
        error={!!errors?.name}
        helperText={errors?.name?.message}
        autoFocus
        {...register('name')}
      />
      <TextField
        margin="normal"
        fullWidth
        id="surname"
        label={text.common.surname}
        autoComplete="surname"
        error={!!errors?.surname}
        helperText={errors?.surname?.message}
        {...register('surname')}
      />
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
        autoComplete="password"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        required
        {...register('password')}
      />
      <Typography component="p" variant="body2" marginTop={3} marginBottom={3}>
        {text.authentication.registerHelpText}
      </Typography>
      <Button type="submit" variant="contained" fullWidth size="large" disabled={isPending}>
        {text.authentication.registerButton}
      </Button>
    </form>
  );
};
