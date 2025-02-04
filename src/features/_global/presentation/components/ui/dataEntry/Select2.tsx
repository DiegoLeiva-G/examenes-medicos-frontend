import { type FC, type KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { RiArrowUpSLine, RiArrowDownSLine, RiCheckboxBlankLine, RiCheckboxLine, RiSearchLine } from '@remixicon/react';

export interface ISelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface ISelect2Props {
  options: ISelectOption[];
  name?: string;
  label?: string;
  error?: boolean;
  errorMessages?: string[];
  required?: boolean;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string | null) => void;
}

export const Select2: FC<ISelect2Props> = ({
  options,
  name,
  label,
  error = false,
  errorMessages,
  required,
  value,
  disabled = false,
  defaultValue,
  onChange,
}) => {
  const [selected, setSelected] = useState<ISelectOption | null>(null);
  const [query, setQuery] = useState<string>('');

  const filteredOptions = useMemo(
    () => options.filter(option => option.label.toLowerCase().includes(query.toLowerCase())),
    [options, query],
  );

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.stopPropagation();
    }
  }, []);

  useEffect(() => {
    if (defaultValue === '') {
      setSelected(null);
    }

    if (defaultValue) {
      const option = filteredOptions.find(item => item.value === defaultValue);
      setSelected(option || null);

      return;
    }

    if (value) {
      const optionValue = filteredOptions.find(item => item.value === value);
      setSelected(optionValue || null);
    }
  }, [defaultValue, filteredOptions, value]);

  const onChangeValue = useCallback(
    (item: ISelectOption | null) => {
      if (item?.value === selected?.value) {
        if (onChange) {
          onChange(item?.value || null);
        }
        setSelected(null);
        return;
      }

      setSelected(item);

      if (onChange) {
        onChange(item?.value || null);
      }
    },
    [selected, onChange],
  );

  return (
    <div className="pb-3" style={{ height: 88 }}>
      <Listbox disabled={disabled} value={selected} onChange={onChangeValue}>
        {({ open }) => (
          <>
            {name && <input hidden name={name} value={selected?.value || ''} readOnly />}
            {label && (
              <Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                {required && <span className="text-red-600 dark:text-red-400">* </span>}
                {`${label}:`}
              </Label>
            )}
            <div className="relative mt-2">
              <ListboxButton
                onClick={() => setQuery('')}
                className={`relative w-full cursor-default rounded-md bg-white dark:bg-gray-700 py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset 
    ${error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500'} focus:outline-none focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6 focus:ring-inset dark:focus:ring-primary-200 dark:text-white`}
              >
                {selected ? (
                  <span className="block truncate">{selected.label}</span>
                ) : (
                  <span className="text-gray-400 dark:text-gray-400">Seleccione una opción</span>
                )}
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  {open ? (
                    <RiArrowUpSLine aria-hidden="true" className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  ) : (
                    <RiArrowDownSLine aria-hidden="true" className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  )}
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-opacity-5 dark:ring-opacity-10 focus:outline-none sm:text-sm ring-gray-300 dark:ring-gray-500"
              >
                <div className="relative border-b border-b-gray-300 dark:border-b-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <RiSearchLine aria-hidden="true" className="h-5 w-5 text-gray-400 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onKeyDown={handleKeyDown}
                    onChange={e => setQuery(e.target.value)}
                    className="peer block w-full border-0 py-1.5 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-10 bg-transparent"
                    placeholder="Buscar..."
                  />
                </div>
                {filteredOptions.map(option => (
                  <ListboxOption
                    key={option.label}
                    value={option}
                    disabled={option.disabled}
                    className="group relative cursor-pointer select-none pl-8 text-gray-900 dark:text-gray-100 border-b border-b-gray-300 dark:border-b-gray-600 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-600"
                  >
                    <span
                      className={` ${option.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} flex items-center ml-2 truncate h-8 font-normal group-data-[selected]:font-semibold group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600`}
                    >
                      {option.label}
                    </span>

                    <span
                      className={`${option.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} absolute inset-y-0 left-0 flex items-center group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600 [.group:not([data-selected])_&]:hidden`}
                    >
                      <RiCheckboxLine aria-hidden="true" className="h-5 w-9 ml-1" />
                    </span>
                    <span
                      className={`${option.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} absolute inset-y-0 left-0 flex items-center group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600 group-data-[selected]:hidden`}
                    >
                      <RiCheckboxBlankLine aria-hidden="true" className="h-5 w-9 ml-1" />
                    </span>
                  </ListboxOption>
                ))}
                {filteredOptions.length === 0 && (
                  <div className="relative flex items-center justify-center h-20 dark:text-white">
                    No hay resultados
                  </div>
                )}
              </ListboxOptions>
            </div>
            <p className="mt-0 text-sm text-red-600 dark:text-red-400">
              {error && errorMessages && errorMessages.length > 0 ? errorMessages[0] : null}
            </p>
          </>
        )}
      </Listbox>
    </div>
  );
};
