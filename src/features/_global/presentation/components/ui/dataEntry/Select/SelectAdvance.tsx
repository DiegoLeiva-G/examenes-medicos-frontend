import { useRef, useEffect, useMemo } from 'react';
import type { SelectProps } from './types';
import { useSelect } from './hooks/useSelect';
import { useClickOutside } from './hooks/useClickOutside';
import { SelectTrigger } from './components/SelectTrigger';
import { SelectDropdown } from './components/SelectDropdown';

export function SelectAdvance({
  options = [],
  value,
  defaultValue,
  placeholder,
  disabled,
  className,
  allowClear = false,
  autoClearSearchValue = true,
  autoFocus,
  defaultActiveFirstOption = true,
  defaultOpen,
  labelInValue,
  mode,
  size = 'middle',
  status,
  variant = 'outlined',
  popupClassName,
  popupMatchSelectWidth = true,
  dropdownStyle,
  listHeight,
  dropdownRender,
  menuItemSelectedIcon,
  notFoundContent,
  prefix,
  removeIcon,
  suffixIcon,
  tagRender,
  labelRender,
  showSearch = false,
  searchValue: controlledSearchValue,
  filterOption = true,
  optionFilterProp = 'label',
  onChange,
  onClear,
  onDropdownVisibleChange,
  onSearch,
  label,
  required,
  error,
  errorMessages,
  name,
  ...rest
}: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, searchValue, filteredOptions, handleSearch, handleSelect, internalValue } = useSelect({
    options,
    defaultValue,
    value,
    mode,
    filterOption,
    optionFilterProp,
    autoClearSearchValue,
    defaultActiveFirstOption,
    defaultOpen,
    labelInValue,
    onChange,
    onSearch,
  });

  useClickOutside(selectRef, () => {
    if (isOpen) {
      setIsOpen(false);
      onDropdownVisibleChange?.(false);
    }
  });

  useEffect(() => {
    if (autoFocus) {
      selectRef.current?.focus();
    }
  }, [autoFocus]);

  const handleClear = () => {
    handleSelect(null);
    onClear?.();
  };

  const handleClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      onDropdownVisibleChange?.(!isOpen);
    }
  };

  const dropdownWidth = popupMatchSelectWidth
    ? typeof popupMatchSelectWidth === 'number'
      ? popupMatchSelectWidth
      : selectRef.current?.offsetWidth
    : undefined;

  const inputValue = useMemo(() => {
    if (!internalValue || internalValue?.length === 0) {
      return <input hidden defaultValue={undefined} />;
    }

    if (typeof internalValue === 'object' && internalValue?.length !== 0) {
      return internalValue.map(item => {
        return <input key={item} name={name} hidden defaultValue={item} />;
      });
    }

    if (typeof internalValue === 'string' && internalValue?.length > 0) {
      return <input name={name} hidden defaultValue={internalValue} />;
    }

    return <input hidden defaultValue={undefined} />;
  }, [name, internalValue]);

  return (
    <div className="pb-3" style={{ height: 88 }} ref={selectRef}>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor={label}>
          {required && <span className="text-red-600 dark:text-red-400">* </span>}
          {`${label}:`}
        </label>
      )}
      {inputValue}
      <div className="relative">
        <SelectTrigger
          isOpen={isOpen}
          value={internalValue}
          searchValue={controlledSearchValue ?? searchValue}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          status={status}
          variant={variant}
          prefix={prefix}
          suffixIcon={suffixIcon}
          removeIcon={removeIcon}
          allowClear={allowClear}
          showSearch={showSearch}
          mode={mode}
          options={options}
          onClear={handleClear}
          onSearch={handleSearch}
          onClick={handleClick}
          className={className}
        />

        {isOpen &&
          (dropdownRender ? (
            dropdownRender(
              <SelectDropdown
                options={filteredOptions}
                value={internalValue}
                loading={rest.loading}
                notFoundContent={notFoundContent}
                menuItemSelectedIcon={menuItemSelectedIcon}
                dropdownStyle={{ ...dropdownStyle, width: dropdownWidth }}
                popupClassName={popupClassName}
                listHeight={listHeight}
                onSelect={handleSelect}
              />,
            )
          ) : (
            <SelectDropdown
              options={filteredOptions}
              value={internalValue}
              loading={rest.loading}
              notFoundContent={notFoundContent}
              menuItemSelectedIcon={menuItemSelectedIcon}
              dropdownStyle={{ ...dropdownStyle, width: dropdownWidth }}
              popupClassName={popupClassName}
              listHeight={listHeight}
              onSelect={handleSelect}
            />
          ))}
      </div>
      <p className="mt-0 text-sm text-red-600 dark:text-red-400">
        {error && errorMessages && errorMessages.length > 0 ? errorMessages[0] : null}
      </p>
    </div>
  );
}
