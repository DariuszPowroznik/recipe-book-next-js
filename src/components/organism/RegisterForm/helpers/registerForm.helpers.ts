import { Dispatch, SetStateAction } from 'react';

import { AlertColor } from '@mui/material';
import { AxiosError, AxiosResponse } from 'axios';
import { UseFormReset } from 'react-hook-form';

import { translations } from 'src/shared/const/translations';

import { RegisterFormBean } from '../RegisterForm';

const text = translations.pl;

type OnSuccessProps = {
  data: AxiosResponse<RegisterFormBean>;
  reset: UseFormReset<RegisterFormBean>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setMessageType: Dispatch<SetStateAction<AlertColor | undefined>>;
};

type OnErrorProps = {
  error: unknown;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setMessageType: Dispatch<SetStateAction<AlertColor | undefined>>;
};

export const onSuccess = ({ data, reset, setOpen, setMessage, setMessageType }: OnSuccessProps) => {
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
};

export const onError = ({ error, setOpen, setMessage, setMessageType }: OnErrorProps) => {
  const axiosError = error as AxiosError;
  setOpen(true);
  setMessageType('error');
  setMessage(
    axiosError && axiosError.isAxiosError && axiosError.response?.status === 409
      ? text.authentication.registerDuplicated
      : text.authentication.registerError
  );
};
