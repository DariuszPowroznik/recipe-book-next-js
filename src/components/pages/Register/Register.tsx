'use client';
import NextLink from 'next/link';

import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { paths } from 'src/shared/const/paths';
import { translations } from 'src/shared/const/translations';

const text = translations.pl;

interface IRegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IRegisterInput>();
  const onSubmit: SubmitHandler<IRegisterInput> = data => console.log(data);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 470,
        width: '100%',
        backgroundColor: 'secondary.light',
        padding: 4,
      }}
      marginTop={3}
    >
      <Typography component="h1" variant="h6" marginBottom={3}>
        {text.authentication.register}
      </Typography>
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
      </Button>{' '}
      <Typography marginTop={3} variant="body2">
        {`${text.authentication.registerLoginText} `}
        <Link
          href={paths.login}
          component={NextLink}
          fontWeight={700}
          variant="body2"
          color={'primary'}
          underline="hover"
        >
          {text.authentication.loginButton}
        </Link>
      </Typography>
    </Box>
  );
};
