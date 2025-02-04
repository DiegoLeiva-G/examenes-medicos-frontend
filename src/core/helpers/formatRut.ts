export const rutRegex = /^[0-9]{7,8}-[0-9Kk]$/;

export const formatRut = (rut: string) => {
  rut = rut.toString().replace(/[^0-9kK]/g, '');

  const parteEntera = rut.slice(0, -1);
  const digitoVerificador = rut.slice(-1).toUpperCase();

  let rutFormateado = '';
  let contador = 0;
  for (let i = parteEntera.length - 1; i >= 0; i--) {
    rutFormateado = parteEntera[i] + rutFormateado;
    contador++;
    if (contador === 3 && i !== 0) {
      rutFormateado = '.' + rutFormateado;
      contador = 0;
    }
  }

  return rutFormateado + '-' + digitoVerificador;
};

export const validatedRut = (rut: string) => {
  const cleanedRut = rut.replace(/[^0-9kK]+/g, '');

  if (cleanedRut.length < 2) {
    return false;
  }

  const rutNumbers = cleanedRut.slice(0, -1);
  const verifierDigit = cleanedRut.slice(-1).toUpperCase();

  let suma = 0;
  let factor = 2;

  for (let i = rutNumbers.length - 1; i >= 0; i--) {
    suma += parseInt(rutNumbers[i]) * factor;
    factor = factor === 7 ? 2 : factor + 1;
  }

  const digitoEsperado = 11 - (suma % 11);
  const digitoCalculado = digitoEsperado === 11 ? '0' : digitoEsperado === 10 ? 'K' : digitoEsperado.toString();

  return digitoCalculado === verifierDigit;
};
