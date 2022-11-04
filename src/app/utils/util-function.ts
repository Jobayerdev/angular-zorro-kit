export const queryNormalizer = (options: any): string => {
  return Object.keys(options)
    .map((x) => {
      return options[x] && `${x}=${options[x]}`;
    })
    .join('&');
};
