import { type FC, type KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import {
  RiArrowUpSLine,
  RiCheckboxBlankLine,
  RiCheckboxLine,
  RiSearchLine,
  RiCloseLine,
  RiArrowDownSLine,
} from '@remixicon/react';
import { type ISelectOption } from './Select2.tsx';

interface ISelectMultipleOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface ISelectMultipleOptionGroup {
  labelGroup: string;
  options: ISelectMultipleOption[];
}

interface ISelectMultipleProps {
  options: (ISelectMultipleOption | ISelectMultipleOptionGroup)[];
  name?: string;
  label?: string;
  error?: boolean;
  errorMessages?: string[];
  required?: boolean;
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  onChange?: (value: string[] | null) => void;
}

export const SelectMultiple: FC<ISelectMultipleProps> = ({
  options,
  name,
  label,
  error = false,
  errorMessages,
  value,
  defaultValue,
  disabled,
  onChange,
  required,
}) => {
  const [selected, setSelected] = useState<ISelectMultipleOption[]>([]);
  const [query, setQuery] = useState<string>('');

  const filteredOptions = useMemo(() => {
    return options.reduce(
      (acc, option) => {
        if ('options' in option) {
          const filteredGroupOptions = option.options.filter(opt =>
            opt.label.toLowerCase().includes(query.toLowerCase()),
          );

          return filteredGroupOptions.length > 0 ? [...acc, { ...option, options: filteredGroupOptions }] : acc;
        }

        if (option.label.toLowerCase().includes(query.toLowerCase())) {
          return [...acc, option];
        }

        return acc;
      },
      [] as (ISelectMultipleOption | ISelectMultipleOptionGroup)[],
    );
  }, [options, query]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ' ') {
      event.stopPropagation();
    }
  }, []);

  useEffect(() => {
    if (defaultValue) {
      const option = options
        // .flatMap(item => ('options' in item ? item.options : item))
        .filter(item => defaultValue.includes(item.value));
      setSelected(option);

      return;
    }

    if (value) {
      const option = options
        // .flatMap(item => ('options' in item ? item.options : item))
        .filter(item => value.includes(item.value));
      setSelected(option);

      return;
    }
  }, [defaultValue, options, value]);

  const onChangeValue = useCallback(
    (option: ISelectOption[] | null) => {
      if (!option || option.length === 0) {
        setSelected([]);

        if (onChange) {
          onChange([]);
        }

        return;
      }

      if (onChange) {
        onChange(option.map(item => item.value) || []);
      }
      setSelected(option);
    },
    [onChange],
  );

  // Eliminar opción seleccionada
  const removeSelectedOption = (optionToRemove: ISelectMultipleOption) => {
    const updatedSelected = selected.filter(option => option.value !== optionToRemove.value);
    setSelected(updatedSelected);
    if (onChange) {
      onChange(updatedSelected.map(item => item.value));
    }
  };

  return (
    <div className="pb-3" style={{ height: 88 }}>
      {name && selected.map(option => <input key={option.value} hidden name={name} value={option.value} readOnly />)}
      <Field>
        <Listbox value={selected} onChange={onChangeValue} multiple disabled={disabled}>
          {({ open }) => (
            <>
              {label && (
                <Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                  {required && <span className="text-red-600 dark:text-red-400">* </span>}
                  {`${label}:`}
                </Label>
              )}
              <div className="relative mt-2">
                <ListboxButton
                  name="options2"
                  onClick={() => setQuery('')}
                  className="relative w-full cursor-default rounded-md bg-white dark:bg-gray-700 py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6 focus:ring-inset dark:focus:ring-primary-200 dark:text-white disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 dark:disabled:bg-gray-900 dark:disabled:text-gray-400 dark:disabled:ring-gray-700"
                >
                  {selected.length !== 0 ? (
                    <span className="flex gap-2 truncate">
                      {selected.map(item => (
                        <span
                          key={item.label}
                          className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-600 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10"
                        >
                          {item.label}
                          <span
                            role="button"
                            className="ml-1 text-xs cursor-pointer"
                            onClick={() => removeSelectedOption(item)}
                          >
                            <RiCloseLine className="h-4 w-4 text-gray-500" />
                          </span>
                        </span>
                      ))}
                    </span>
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
                  className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 border text-base shadow-lg ring-1 ring-opacity-5 dark:ring-opacity-10 focus:outline-none sm:text-sm ring-gray-300 dark:ring-gray-500"
                >
                  <div className="relative border-b border-b-gray-300 dark:border-b-gray-500">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <RiSearchLine aria-hidden="true" className="h-5 w-5 text-gray-400 dark:text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={query}
                      onKeyDown={handleKeyDown} // Agregar el manejador de eventos
                      onChange={e => setQuery(e.target.value)}
                      className="peer block w-full border-0 py-1.5 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-10 bg-transparent "
                      placeholder="Buscar..."
                    />
                  </div>
                  {filteredOptions.map(option =>
                    'options' in option ? (
                      <div key={option.labelGroup}>
                        <div className="text-gray-700 dark:text-gray-200 font-semibold ml-3.5 py-2">
                          {option.labelGroup}
                        </div>
                        {option.options.map(subOption => (
                          <ListboxOption
                            key={subOption.label}
                            value={subOption}
                            disabled={subOption.disabled}
                            className="group relative cursor-pointer select-none pl-8 text-gray-900 dark:text-gray-100 border-b border-b-gray-300 dark:border-b-gray-500 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-600"
                          >
                            <span
                              className={`${subOption.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} flex items-center ml-2 truncate h-8 font-normal group-data-[selected]:font-semibold group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600`}
                            >
                              {subOption.label}
                            </span>
                            <span
                              className={`${subOption.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} absolute inset-y-0 left-0 flex items-center group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600 [.group:not([data-selected])_&]:hidden`}
                            >
                              <RiCheckboxLine aria-hidden="true" className="h-5 w-9 ml-1" />
                            </span>
                            <span
                              className={`${subOption.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} absolute inset-y-0 left-0 flex items-center group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600 group-data-[selected]:hidden`}
                            >
                              <RiCheckboxBlankLine aria-hidden="true" className="h-5 w-9 ml-1" />
                            </span>
                          </ListboxOption>
                        ))}
                      </div>
                    ) : (
                      <ListboxOption
                        key={option.label}
                        value={option}
                        disabled={option.disabled}
                        className="group relative cursor-pointer select-none pl-8 text-gray-900 dark:text-gray-100 border-b border-b-gray-300 dark:border-b-gray-500 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-600"
                      >
                        <span
                          className={`${option.disabled ? 'text-gray-400 dark:text-gray-500 hover:cursor-not-allowed' : ''} flex items-center ml-2 truncate h-8 font-normal group-data-[selected]:font-semibold group-data-[selected]:bg-gray-100 dark:group-data-[selected]:bg-gray-600`}
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
                    ),
                  )}
                </ListboxOptions>
              </div>
            </>
          )}
        </Listbox>
      </Field>
      {error && errorMessages && (
        <div className="mt-2 text-sm text-red-600 dark:text-red-400">{errorMessages.join(', ')}</div>
      )}
    </div>
  );
};
