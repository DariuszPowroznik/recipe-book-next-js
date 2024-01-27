import { registerService } from 'src/services/register/register.service';
import { registerValidation } from 'src/services/register/register.validation';
import { apiErrorHandler } from 'src/utils/apiErrorHandler';
import withErrorHandler from 'src/utils/withErrorHandler';

export const POST = withErrorHandler(async (request: Request) => {
  const payload = await request.json();
  const parsedData = await registerValidation(payload);
  await registerService(parsedData);

  // TODO: Extract messages to const
  return new Response(JSON.stringify({ message: 'User added' }), { status: 201 });
});
