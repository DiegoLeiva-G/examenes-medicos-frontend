export const textCapitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const textCapitalizeLowerCase = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};
