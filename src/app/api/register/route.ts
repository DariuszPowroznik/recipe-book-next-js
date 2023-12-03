import { registerUser } from 'src/services/register.service';
import { registerSchema } from 'src/shared/schemas/register.schema';
import { apiErrorHandler } from 'src/utils/apiErrorHandler';

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    const parsedData = registerSchema.parse(userData);
    const newUser = await registerUser(parsedData);

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log(error);
    return apiErrorHandler(error);
  }
}
