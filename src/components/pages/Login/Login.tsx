'use client';
import NextLink from 'next/link';

import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { paths } from 'src/shared/const/paths';
import { translations } from 'src/shared/const/translations';

import styled from './Login.module.scss';

const text = translations.pl;

interface ILoginInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<ILoginInput>();
  const onSubmit: SubmitHandler<ILoginInput> = data => console.log(data);

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
        {text.authentication.login}
      </Typography>
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
      <Typography marginTop={3} variant="body2">
        {`${text.authentication.loginRegisterText} `}
        <Link
          href={paths.register}
          component={NextLink}
          fontWeight={700}
          variant="body2"
          color={'primary'}
          underline="hover"
        >
          {text.authentication.registerButton}
        </Link>
      </Typography>
    </Box>
  );
};
