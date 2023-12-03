import { z } from 'zod';

import { validators } from '../validators';

export const loginSchema = z.object({
  name: validators.name,
  surname: validators.surname,
  password: validators.loginPassword,
  email: validators.email,
});
