import React from 'react';
import type { SelectProps, SelectOption } from '../types';
// import { getSizeClasses, getStatusClasses, getVariantClasses } from '../utils/styleUtils';
import { renderValue } from '../utils/displayUtils';
import { RiArrowDownSLine, RiCloseLine, RiSearchLine } from '@remixicon/react';

interface SelectTriggerProps
  extends Pick<
    SelectProps,
    | 'disabled'
    | 'size'
    | 'status'
    | 'variant'
    | 'prefix'
    | 'suffixIcon'
    | 'removeIcon'
    | 'allowClear'
    | 'showSearch'
    | 'mode'
  > {
  isOpen: boolean;
  value: any;
  searchValue: string;
  placeholder?: React.ReactNode;
  options: SelectOption[];
  onClear: () => void;
  onSearch: (value: string) => void;
  onClick?: () => void;
  className?: string;
  error?: boolean;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  isOpen,
  value,
  searchValue,
  placeholder,
  disabled,
  // size,
  // status,
  // variant,
  prefix,
  suffixIcon,
  removeIcon,
  allowClear,
  showSearch,
  mode,
  options,
  onClear,
  onSearch,
  onClick,
  // className,
  error,
}) => {
  const displayValue = value?.length === 0 ? null : renderValue(value, options, mode);

  return (
    <div className="relative mt-2 flex items-center" onClick={!disabled ? onClick : undefined}>
      {prefix && <span className="mr-2">{prefix}</span>}
      {!isOpen || !showSearch ? (
        displayValue ? (
          <div
            className={`block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ${
              error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500'
            } placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset ${
              error
                ? 'focus:ring-red-600 dark:focus:ring-red-500'
                : 'focus:ring-primary-600 dark:focus:ring-primary-200'
            } sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white`}
          >
            {displayValue}
          </div>
        ) : (
          <span
            className={`block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ${
              error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500'
            } text-gray-400 dark:text-gray-400 focus:ring-2 focus:ring-inset ${
              error
                ? 'focus:ring-red-600 dark:focus:ring-red-500'
                : 'focus:ring-primary-600 dark:focus:ring-primary-200'
            } sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white`}
          >
            {placeholder}
          </span>
        )
      ) : (
        <input
          type="text"
          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
            error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500'
          } placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset ${
            error ? 'focus:ring-red-600 dark:focus:ring-red-500' : 'focus:ring-primary-600 dark:focus:ring-primary-200'
          } sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white`}
          value={searchValue}
          onChange={e => onSearch(e.target.value)}
          onClick={e => e.stopPropagation()}
          placeholder={typeof displayValue === 'string' ? displayValue : 'Buscar...'}
        />
      )}

      <div className="absolute inset-y-0 right-0 flex py-1.5 items-center pr-3">
        {allowClear && value && !disabled && (
          <button
            type="button"
            className="p-0.5 hover:bg-gray-100 rounded-full"
            onClick={e => {
              e.stopPropagation();
              onClear();
            }}
          >
            {removeIcon || <RiCloseLine className="text-gray-400 hover:text-gray-600" />}
          </button>
        )}
        {showSearch && isOpen && <RiSearchLine className="text-gray-400" />}
        {suffixIcon || (
          <RiArrowDownSLine
            className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </div>
    </div>
  );
};
