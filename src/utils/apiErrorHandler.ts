import { Prisma } from '@prisma/client';
import { z } from 'zod';

export function apiErrorHandler(error: unknown): Response {
  if (error instanceof z.ZodError) {
    return new Response(JSON.stringify({ message: 'Validation failed' }), {
      status: 400,
    });
  }
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return new Response(JSON.stringify({ message: `Database error: ${error.code}` }), {
      status: error.code === 'P2002' ? 409 : 500,
    });
  }
  if (error instanceof Error) {
    return new Response(JSON.stringify({ message: error.message || 'Internal Server Error' }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: 'An unexpected error occurred' }), {
    status: 500,
  });
}
