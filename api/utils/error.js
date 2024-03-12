export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = error;
  error.message = message;
  return error;
};
