import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { RiCalendarLine } from '@remixicon/react';
import { endOfMonth, startOfMonth } from 'date-fns';
import { Select2 } from './Select2.tsx';
import { Column, Row } from '../layout';

interface RangeDatePickerProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessages?: string[];
  onDateRangeSelect?: (startDate: Date | null, endDate: Date | null) => void;
  required?: boolean;
  disabled?: boolean;
  value?: Date[];
  defaultValue?: Date[];
  resetLabel?: string;
  selectLabel?: string;
}

export const RangeDatePicker2: React.FC<RangeDatePickerProps> = ({
  name,
  label,
  placeholder = 'Seleccione un rango de meses',
  error = false,
  errorMessages,
  onDateRangeSelect,
  required,
  disabled,
  value,
  defaultValue,
  resetLabel = 'Limpiar',
  selectLabel = 'Seleccionar',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<[Date, Date]>([startOfMonth(new Date()), endOfMonth(new Date())]);
  const [validationError, setValidationError] = useState('');

  const months = useMemo(
    () => [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    [],
  );

  const years = useMemo(
    () => Array.from({ length: 50 }, (_, i) => currentDate[0].getFullYear() - 15 + i),
    [currentDate],
  );

  const getFirstDayOfMonth = (year: number, month: number): Date => new Date(year, month, 1);
  const getLastDayOfMonth = (year: number, month: number): Date => new Date(year, month + 1, 0);

  const handleMonthChange = useCallback(
    (value: string | null, isStart: boolean) => {
      const month = parseInt(value || '');
      const year = isStart ? currentDate[0].getFullYear() : currentDate[1].getFullYear();
      const newStartDate = isStart ? getFirstDayOfMonth(year, month) : currentDate[0];
      const newEndDate = !isStart ? getLastDayOfMonth(year, month) : currentDate[1];

      setCurrentDate([newStartDate, newEndDate]);
    },
    [currentDate],
  );

  const handleYearChange = useCallback(
    (value: string | null, isStart: boolean) => {
      const year = parseInt(value || '');
      const month = isStart ? currentDate[0].getMonth() : currentDate[1].getMonth();
      const newStartDate = isStart ? getFirstDayOfMonth(year, month) : currentDate[0];
      const newEndDate = !isStart ? getLastDayOfMonth(year, month) : currentDate[1];

      setCurrentDate([newStartDate, newEndDate]);
    },
    [currentDate],
  );

  const selectRange = useCallback(() => {
    if (currentDate[0] > currentDate[1]) {
      setValidationError('La fecha de inicio debe ser menor que la fecha de fin.');
      return;
    }

    // Verificación de campo obligatorio
    if (required && (!currentDate[0] || !currentDate[1])) {
      setValidationError('Este campo es obligatorio.');
      return;
    }

    setValidationError('');
    setInputValue(
      `${currentDate[0].getDate().toString().padStart(2, '0')}-${(currentDate[0].getMonth() + 1)
        .toString()
        .padStart(
          2,
          '0',
        )}-${currentDate[0].getFullYear()} al ${currentDate[1].getDate().toString().padStart(2, '0')}-${(
        currentDate[1].getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}-${currentDate[1].getFullYear()}`,
    );
    setIsOpen(false);
    onDateRangeSelect?.(currentDate[0], currentDate[1]);
  }, [currentDate, onDateRangeSelect, required]);

  const clearDate = useCallback(() => {
    setInputValue('');
    setIsOpen(false);
    setValidationError('');
    onDateRangeSelect?.(null, null);
  }, [onDateRangeSelect]);

  useEffect(() => {
    if (defaultValue) {
      setCurrentDate(defaultValue);
      setInputValue(
        `${defaultValue[0].getDate().toString().padStart(2, '0')}-${(defaultValue[0].getMonth() + 1)
          .toString()
          .padStart(
            2,
            '0',
          )}-${defaultValue[0].getFullYear()} al ${defaultValue[1].getDate().toString().padStart(2, '0')}-${(
          defaultValue[1].getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${defaultValue[1].getFullYear()}`,
      );

      return;
    }

    if (value) {
      setCurrentDate(value);
      setInputValue(
        `${value[0].getDate().toString().padStart(2, '0')}-${(value[0].getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${value[0].getFullYear()} al ${value[1].getDate().toString().padStart(2, '0')}-${(
          value[1].getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${value[1].getFullYear()}`,
      );
    }
  }, [defaultValue, value]);

  return (
    <div className="relative pb-3">
      {name &&
        currentDate.map((date, index) => (
          <input key={date.toISOString() + index} hidden name={name} value={date.toISOString()} readOnly />
        ))}
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
          {required && <span className="text-red-600 dark:text-red-400">* </span>}
          {`${label}:`}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          readOnly
          type="text"
          value={inputValue}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          disabled={disabled}
          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500'} placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset ${error ? 'focus:ring-red-600 dark:focus:ring-red-500' : 'focus:ring-primary-600 dark:focus:ring-primary-200'} sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 dark:disabled:bg-gray-900 dark:disabled:text-gray-400 dark:disabled:ring-gray-700`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <RiCalendarLine className="w-5 h-5 text-gray-400 dark:text-gray-200" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-20 w-full mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800 border border-gray-300 dark:border-gray-600 p-4">
          <Row spacingX="sm:gap-x-6">
            <Column colSpan="col-span-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Fecha inicial</h4>
            </Column>
            <Column colSpan="col-span-6">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Fecha final</h4>
            </Column>
          </Row>
          <Row spacingX="sm:gap-x-6">
            <Column colSpan="col-span-4">
              <Select2
                label="Mes"
                value={currentDate[0].getMonth().toString()}
                onChange={e => handleMonthChange(e, true)}
                options={months.map((month, index) => ({
                  label: month,
                  value: index.toString(),
                }))}
              />
            </Column>
            <Column colSpan="col-span-2">
              <Select2
                label="Año"
                value={currentDate[0].getFullYear().toString()}
                onChange={e => handleYearChange(e, true)}
                options={years.map(year => ({
                  label: year.toString(),
                  value: year.toString(),
                }))}
              />
            </Column>

            <Column colSpan="col-span-4">
              <Select2
                label="Mes"
                value={currentDate[1].getMonth().toString()}
                onChange={e => handleMonthChange(e, false)}
                options={months.map((month, index) => ({
                  label: month,
                  value: index.toString(),
                }))}
              />
            </Column>
            <Column colSpan="col-span-2">
              <Select2
                label="Año"
                value={currentDate[1].getFullYear().toString()}
                onChange={e => handleYearChange(e, false)}
                options={years.map(year => ({
                  label: year.toString(),
                  value: year.toString(),
                }))}
              />
            </Column>
          </Row>

          {validationError && <div className="mt-2 text-sm text-red-600 dark:text-red-400">{validationError}</div>}
          <div className="mt-4 flex justify-between gap-4">
            <button
              type="button"
              onClick={clearDate}
              className="w-full sm:w-auto py-2 px-4 text-sm font-medium text-gray-100 bg-red-600 hover:bg-red-500 rounded-md border border-red-600 dark:text-gray-100 dark:bg-red-500 dark:hover:bg-red-600 dark:border-red-500  "
            >
              {resetLabel}
            </button>
            <button
              type="button"
              onClick={selectRange}
              className="w-full sm:w-auto py-2 px-4 text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 rounded-md border border-bg-primary-600 dark:text-primary-50 dark:bg-primary-600 dark:hover:bg-primary-500 dark:border-primary-600"
            >
              {selectLabel}
            </button>
          </div>
        </div>
      )}
      <p className="mt-0 text-sm text-red-600 dark:text-red-400">
        {error && errorMessages && errorMessages.length > 0 ? errorMessages[0] : null}
      </p>
    </div>
  );
};
