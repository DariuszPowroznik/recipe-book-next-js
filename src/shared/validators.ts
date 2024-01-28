import { z } from 'zod';

import { translations } from './const/translations';

const text = translations.pl.validations;

export const validators = {
  email: z.string().email({ message: text.wrongEmail }).min(1, { message: text.emptyField }),
  name: z.string().max(50, { message: text.toLongString }),
  surname: z.string().max(50, { message: text.toLongString }),
  password: z
    .string()
    .min(5, { message: text.wrongPassword })
    .max(50, { message: text.wrongPassword }),
  loginPassword: z
    .string()
    .min(1, { message: text.emptyField })
    .max(50, { message: text.wrongPassword }),
};
