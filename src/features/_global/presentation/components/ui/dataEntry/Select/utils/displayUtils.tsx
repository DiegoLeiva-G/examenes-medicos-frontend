import type { ReactNode } from 'react';
import type { SelectOption } from '../types';

export const renderValue = (value: any, options: SelectOption[], mode?: 'multiple' | 'tags'): ReactNode => {
  if (!value) return null;

  const findOptionLabel = (val: any): string => {
    const option = options.find(opt => (typeof val === 'object' ? opt.value === val.value : opt.value === val));
    return option?.label?.toString() || '';
  };

  if (Array.isArray(value)) {
    return (
      <div className="flex flex-wrap gap-1">
        {value.map((v, index) => (
          <span key={index} className="bg-primary-100 text-primary-800 px-2 py-0.5 rounded text-sm">
            {findOptionLabel(v)}
          </span>
        ))}
      </div>
    );
  }

  return findOptionLabel(value);
};
