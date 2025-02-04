import type { SelectSize, SelectStatus, SelectVariant } from '../types';

export const getSizeClasses = (size: SelectSize = 'middle'): string => {
  switch (size) {
    case 'large':
      return 'h-10 text-base';
    case 'small':
      return 'h-7 text-sm';
    default:
      return 'h-9 text-sm';
  }
};

export const getStatusClasses = (status?: SelectStatus): string => {
  switch (status) {
    case 'error':
      return 'border-red-500 focus:border-red-500 hover:border-red-500';
    case 'warning':
      return 'border-yellow-500 focus:border-yellow-500 hover:border-yellow-500';
    default:
      return 'border-gray-300 focus:border-primary-500 hover:border-primary-400';
  }
};

export const getVariantClasses = (variant: SelectVariant = 'outlined'): string => {
  switch (variant) {
    case 'filled':
      return 'bg-gray-100 border-transparent';
    case 'borderless':
      return 'border-transparent shadow-none';
    default:
      return 'bg-white border';
  }
};
