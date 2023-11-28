'use client';
import NextLink from 'next/link';

import { Box, Typography, Link } from '@mui/material';

import { LoginForm } from 'src/components/organism';
import { paths } from 'src/shared/const/paths';
import { translations } from 'src/shared/const/translations';

const text = translations.pl;

export const LoginPage = () => {
  return (
    <Box
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
      <LoginForm />
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
