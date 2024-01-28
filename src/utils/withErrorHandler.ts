import { apiErrorHandler } from './apiErrorHandler';

type HandlerFunction<T extends any[] = any[]> = (
  req: Request,
  ...args: T
) => Promise<Response | undefined | void>;

function withErrorHandler<T extends any[]>(fn: HandlerFunction<T>) {
  return async function (request: Request, ...args: T) {
    try {
      return await fn(request, ...args);
    } catch (error) {
      return apiErrorHandler(error);
    }
  };
}

export default withErrorHandler;
