export const getErrorMessage = (e: unknown) => {
  if (typeof e === 'object' && e !== null && 'message' in e && typeof e.message === 'string') {
    return e.message;
  } else {
    return 'Unknown error';
  }
};
