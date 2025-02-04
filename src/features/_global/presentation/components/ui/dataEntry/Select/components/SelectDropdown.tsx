import React from 'react';
import type { SelectOption, SelectProps } from '../types';
import { RiCheckLine } from '@remixicon/react';

interface SelectDropdownProps
  extends Pick<
    SelectProps,
    | 'loading'
    | 'notFoundContent'
    | 'menuItemSelectedIcon'
    | 'dropdownStyle'
    | 'popupClassName'
    | 'listHeight'
    | 'virtual'
  > {
  options: SelectOption[];
  value: any;
  onSelect: (option: SelectOption) => void;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  value,
  loading,
  notFoundContent = 'No hay resultados',
  menuItemSelectedIcon,
  dropdownStyle,
  popupClassName,
  listHeight = 256,
  onSelect,
}) => {
  const isSelected = (option: SelectOption) => {
    if (Array.isArray(value)) {
      return value.some(v => (typeof v === 'object' ? v.value === option.value : v === option.value));
    }
    return typeof value === 'object' ? value?.value === option.value : value === option.value;
  };

  return (
    <div
      className={`absolute z-50 w-full mt-1 bg-white  dark:bg-gray-700 border border-gray-200 dark:border-gray-500 rounded-md shadow-lg overflow-auto ${popupClassName || ''}`}
      style={{ maxHeight: listHeight, ...dropdownStyle }}
    >
      {loading ? (
        <div className="flex items-center justify-center p-4">
          <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : options.length > 0 ? (
        options.map(option => {
          const selected = isSelected(option);
          return (
            <div
              key={option.value}
              className={`
                flex items-center justify-between px-3 py-2 cursor-pointer
                ${option.className || ''}
                ${selected ? 'bg-primary-50 dark:bg-gray-600 text-primary-600 dark:text-primary-50' : 'hover:bg-gray-50 dark:text-primary-50 dark:hover:bg-gray-800'}
                ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}
              `}
              style={option.style}
              onClick={() => !option.disabled && onSelect(option)}
            >
              <span>{option.label}</span>
              {selected && (menuItemSelectedIcon || <RiCheckLine />)}
            </div>
          );
        })
      ) : (
        <div className="px-3 py-2 text-gray-500 dark:text-gray-50 text-center">{notFoundContent}</div>
      )}
    </div>
  );
};
