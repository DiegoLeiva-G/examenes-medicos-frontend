export const textCapitalizeWithoutAccentsSpacesLowerCase = (value: string) => {
  const words = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(' ');

  const result = words
    .map(word => {
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join('-');

  return result;
};
