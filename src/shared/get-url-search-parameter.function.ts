export const getUrlSearchParameter = (parameterName): string | null => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return urlSearchParams.get(parameterName);
};
