export function formatNumber(value: number) {
  return `$ ${value.toLocaleString('es-CL')}`;
}

export const formatNumbers = (value: number | string | undefined): string => {
  if (typeof value === 'number') {
    return new Intl.NumberFormat('es-CL').format(value);
  }

  if (typeof value === 'string' && !isNaN(Number(value))) {
    return new Intl.NumberFormat('es-CL').format(Number(value));
  }

  return '';
};

export function parseNumber(displayValue: string | undefined): number {
  if (displayValue) {
    const parsedValue = displayValue.replace(/\./g, '');
    return Number(parsedValue) || 0;
  }
  return 0;
}
