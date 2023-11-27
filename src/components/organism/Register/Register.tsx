'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Typography, TextField, Button, Link } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { translations } from 'src/shared/const/translations';
import { validators } from 'src/shared/validators';

const text = translations.pl;

interface RegisterData {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

const schema = z.object({
  firstName: validators.firstName,
  lastName: validators.lastName,
  password: validators.password,
  email: validators.email,
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<RegisterData> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="firstName"
        size="medium"
        label={text.common.name}
        autoComplete="firstName"
        error={!!errors?.firstName}
        helperText={errors?.firstName?.message}
        autoFocus
        {...register('firstName')}
      />
      <TextField
        margin="normal"
        fullWidth
        id="lastName"
        label={text.common.surname}
        autoComplete="lastName"
        error={!!errors?.lastName}
        helperText={errors?.lastName?.message}
        {...register('lastName')}
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
      <Button type="submit" variant="contained" fullWidth size="large">
        {text.authentication.registerButton}
      </Button>
    </form>
  );
};
