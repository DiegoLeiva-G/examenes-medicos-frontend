import { type ChangeEvent, type FC, useEffect, useState } from 'react';
import { RiErrorWarningFill } from '@remixicon/react';

interface IInputTextAreaProps {
  id: string;
  label?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: boolean;
  errorMessages?: string[];
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const InputTextArea: FC<IInputTextAreaProps> = ({
  id,
  name,
  label,
  value,
  placeholder,
  required,
  rows = 4,
  error = false,
  errorMessages = [],
  className = '',
  readOnly = false,
  defaultValue,
  onChange,
  disabled,
}) => {
  const [inputValues, setInputValues] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    setInputValues(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInputValues(value);
    }

    if (defaultValue !== undefined && defaultValue !== null && (value === undefined || value === null)) {
      setInputValues(defaultValue);
    }
  }, [value, defaultValue]);

  return (
    <div className="pb-3">
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor={id}>
          {required && <span className="text-red-600 dark:text-red-400">* </span>}
          {`${label}:`}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <textarea
          id={id}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={inputValues}
          rows={rows}
          readOnly={readOnly}
          onChange={handleInputChange}
          className={`block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ${
            error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500 '
          } placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset ${
            error ? 'focus:ring-red-600 dark:focus:ring-red-500' : 'focus:ring-primary-600 dark:focus:ring-primary-200'
          } sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white ${className} disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 dark:disabled:bg-gray-900 dark:disabled:text-gray-400 dark:disabled:ring-gray-700`}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <RiErrorWarningFill aria-hidden="true" className="h-5 w-5 text-red-500 dark:text-red-400" />
          </div>
        )}
      </div>
      {error && errorMessages && errorMessages.length > 0 && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errorMessages[0]}</p>
      )}
    </div>
  );
};
