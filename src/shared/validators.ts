import { z } from 'zod';

import { translations } from './const/translations';

const text = translations.pl.validations;

export const validators = {
  email: z.string().email({ message: text.wrongEmail }).min(1, { message: text.emptyField }),
  firstName: z.string(),
  lastName: z.string(),
  password: z
    .string()
    .min(5, { message: text.wrongPassword })
    .max(50, { message: text.wrongPassword }),
  loginPassword: z.string().min(1, { message: text.emptyField }),
};
