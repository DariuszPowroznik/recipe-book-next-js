'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Typography, TextField, AlertColor, Alert } from '@mui/material';
import { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Snackbar } from 'src/components/molecules';
import { translations } from 'src/shared/const/translations';
import { registerSchema } from 'src/shared/schemas/register.schema';

import { useRegisterCommand } from '../RegisterForm/RegisterForm.hook';

const text = translations.pl;

export interface RegisterFormBean {
  name: string;
  surname: string;
  password: string;
  email: string;
}

export const RegisterForm = () => {
  const [open, setOpen] = useState(false);
  const [messageType, setMessageType] = useState<AlertColor>();
  const [message, setMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormBean>({
    mode: 'onBlur',
    resolver: zodResolver(registerSchema),
  });
  const { mutate, isPending } = useRegisterCommand();
  const onSubmit: SubmitHandler<RegisterFormBean> = data =>
    mutate(data, {
      onSuccess: data => {
        if (data.status === 201) {
          reset();
          setOpen(true);
          setMessageType('success');
          setMessage(text.authentication.registerSuccess);
        } else {
          setOpen(true);
          setMessageType('error');
          setMessage(text.authentication.registerError);
        }
      },
      onError: (error: unknown) => {
        const axiosError = error as AxiosError;
        setOpen(true);
        setMessageType('error');
        setMessage(
          axiosError && axiosError.isAxiosError && axiosError.response?.status === 409
            ? text.authentication.registerDuplicated
            : text.authentication.registerError
        );
      },
    });

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
      <LoadingButton
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        disabled={isPending}
        loading={isPending}
      >
        {text.authentication.registerButton}
      </LoadingButton>
      <Snackbar open={open} type={messageType} handleClose={() => setOpen(false)}>
        {message}
      </Snackbar>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </form>
  );
};
