'use client';

import { Typography, TextField, Button, Link } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { translations } from 'src/shared/const/translations';

const text = translations.pl;

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const Register = () => {
  const { register, handleSubmit } = useForm<RegisterData>();
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
        autoFocus
        {...register('firstName')}
      />
      <TextField
        margin="normal"
        fullWidth
        id="lastName"
        label={text.common.surname}
        autoComplete="lastName"
        {...register('lastName')}
      />
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label={text.common.email}
        type="email"
        autoComplete="email"
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
      <Typography component="p" variant="body2" marginTop={3} marginBottom={3}>
        {text.authentication.registerHelpText}
      </Typography>
      <Button type="submit" variant="contained" fullWidth size="large">
        {text.authentication.registerButton}
      </Button>
    </form>
  );
};
