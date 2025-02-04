import { useState, useCallback, useMemo, useEffect } from 'react';
import type { SelectOption, SelectProps } from '../types';
import { defaultFilterOption } from '../utils/filterUtils';

interface UseSelectProps
  extends Pick<
    SelectProps,
    | 'options'
    | 'defaultValue'
    | 'value'
    | 'mode'
    | 'filterOption'
    | 'optionFilterProp'
    | 'autoClearSearchValue'
    | 'defaultActiveFirstOption'
    | 'defaultOpen'
    | 'labelInValue'
    | 'maxCount'
    | 'onChange'
    | 'onSelect'
    | 'onDeselect'
    | 'onSearch'
  > {}

export function useSelect({
  options = [],
  defaultValue,
  value: controlledValue,
  mode,
  filterOption,
  optionFilterProp = 'label',
  autoClearSearchValue = true,
  defaultActiveFirstOption = true,
  defaultOpen,
  labelInValue,
  maxCount,
  onChange,
  onSelect,
  onDeselect,
  onSearch,
}: UseSelectProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  const [searchValue, setSearchValue] = useState('');
  const [activeIndex, setActiveIndex] = useState(defaultActiveFirstOption ? 0 : -1);
  const [internalValue, setInternalValue] = useState<any>(
    controlledValue ?? defaultValue ?? (mode === 'multiple' ? [] : null),
  );

  const handleSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      onSearch?.(value);
    },
    [onSearch],
  );

  const filteredOptions = useMemo(() => {
    if (!searchValue || !options.length) return options;

    if (typeof filterOption === 'function') {
      return options.filter(option => filterOption(searchValue, option));
    }

    if (filterOption === false) return options;

    return options.filter(option => defaultFilterOption(searchValue, option, optionFilterProp));
  }, [options, searchValue, filterOption, optionFilterProp]);

  const handleSelect = useCallback(
    (option: SelectOption | null) => {
      if (!option) {
        setInternalValue(mode === 'multiple' ? [] : null);
        onChange?.(mode === 'multiple' ? [] : null, null);
        return;
      }

      let newValue;
      if (mode === 'multiple' || mode === 'tags') {
        const currentValue = Array.isArray(internalValue) ? internalValue : [];
        const optionValue = labelInValue ? { label: option.label, value: option.value } : option.value;

        if (currentValue.some(v => (labelInValue ? v.value : v) === option.value)) {
          newValue = currentValue.filter(v => (labelInValue ? v.value : v) !== option.value);
          onDeselect?.(option.value, option);
        } else {
          if (maxCount && currentValue.length >= maxCount) {
            return;
          }
          newValue = [...currentValue, optionValue];
          onSelect?.(option.value, option);
        }
      } else {
        newValue = labelInValue ? { label: option.label, value: option.value } : option.value;
        onSelect?.(option.value, option);
        setIsOpen(false);
      }

      setInternalValue(newValue);
      onChange?.(newValue, option);

      if (autoClearSearchValue) {
        setSearchValue('');
      }
    },
    [internalValue, mode, labelInValue, maxCount, autoClearSearchValue, onChange, onSelect, onDeselect],
  );

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  return {
    isOpen,
    setIsOpen,
    searchValue,
    setSearchValue,
    activeIndex,
    setActiveIndex,
    internalValue,
    setInternalValue,
    filteredOptions,
    handleSearch,
    handleSelect,
  };
}
