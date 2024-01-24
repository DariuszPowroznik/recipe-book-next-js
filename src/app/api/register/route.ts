import { registerService } from 'src/services/register/register.service';
import { registerValidation } from 'src/services/register/register.validation';
import { apiErrorHandler } from 'src/utils/apiErrorHandler';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsedData = await registerValidation(payload);
    await registerService(parsedData);

    // TODO: Extract messages to const
    return new Response(JSON.stringify({ message: 'User added' }), { status: 201 });
  } catch (error) {
    // TODO: Global error handler https://medium.com/@matijazib/global-error-handling-in-the-backend-with-next-js-13-api-d60ccbec27dd
    return apiErrorHandler(error);
  }
}
