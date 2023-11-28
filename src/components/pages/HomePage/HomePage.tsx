import NextLink from 'next/link';

import { Typography, Link, Container } from '@mui/material';

import { Logo } from 'src/components/atoms/Logo/Logo';
import { paths } from 'src/shared/const/paths';
import { translations } from 'src/shared/const/translations';

import styled from './HomePage.module.scss';

const text = translations.pl;

export const HomePage = () => (
  <Container className={styled.wrapper} maxWidth="sm">
    <Logo big />
    <Typography marginTop={'70px'} marginBottom={'5px'} variant="body1">
      {text.welcomePage.welcome}
    </Typography>
    <Link
      href={paths.login}
      component={NextLink}
      fontWeight={700}
      variant="body1"
      color={'primary'}
      underline="hover"
    >
      {text.authentication.login}
    </Link>
    <Typography marginY={'5px'} variant="body1">
      {text.common.or}
    </Typography>
    <Link
      href={paths.register}
      component={NextLink}
      fontWeight={700}
      variant="body1"
      color={'primary'}
      underline="hover"
    >
      {text.authentication.createAccount}
    </Link>
    <Typography marginY={'5px'} variant="body1">
      {text.welcomePage.toUsePlatform}
    </Typography>
  </Container>
);
