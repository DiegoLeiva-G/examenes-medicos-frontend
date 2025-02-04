import type { SelectOption } from '../types';

export const defaultFilterOption = (
  inputValue: string,
  option: SelectOption,
  optionFilterProp: string = 'label',
): boolean => {
  const optionValue = String(option[optionFilterProp]).toLowerCase();
  return optionValue.includes(inputValue.toLowerCase());
};
