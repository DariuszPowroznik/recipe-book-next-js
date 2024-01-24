import { RegisterFormBean } from 'src/components/organism/RegisterForm/Register';
import { registerSchema } from 'src/shared/schemas/register.schema';

export async function registerValidation(payload: RegisterFormBean) {
  return registerSchema.parseAsync(payload);
}
