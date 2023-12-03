import { z } from 'zod';

import { validators } from 'src/shared/validators';

export const registerSchema = z.object({
  name: validators.name,
  surname: validators.surname,
  password: validators.password,
  email: validators.email,
});
