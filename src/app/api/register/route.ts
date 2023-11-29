import { registerUser } from 'src/services/register.service';

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    const newUser = await registerUser(userData);

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
