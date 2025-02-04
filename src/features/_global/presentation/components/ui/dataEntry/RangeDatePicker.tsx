import { useState, useEffect, useMemo, useCallback, type FC } from 'react';
import { RiArrowLeftLine, RiArrowRightLine, RiCalendarLine } from '@remixicon/react';

interface IRangeDatePickerProps {
  id: string;
  label?: string;
  error?: boolean;
  errorMessages?: string[];
  required?: boolean;
}

export const RangeDatePicker: FC<IRangeDatePickerProps> = ({ id, label, required, error }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const daysInMonth = useMemo(
    () => new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
    [currentDate],
  );

  const firstDayOfMonth = useMemo(
    () => new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(),
    [currentDate],
  );

  const days = useMemo(() => ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], []);

  const months = useMemo(
    () => [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    [],
  );

  const years = useMemo(() => Array.from({ length: 21 }, (_, i) => currentDate.getFullYear() - 10 + i), [currentDate]);

  const prevMonth = useCallback(() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)), []);

  const nextMonth = useCallback(() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)), []);

  const formatDate = useCallback((date: Date) => {
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  }, []);

  const selectDate = useCallback(
    (day: number) => {
      const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

      if (!startDate || (startDate && endDate)) {
        setStartDate(selected);
        setEndDate(null);
        setInputValue(formatDate(selected));
      } else if (startDate && !endDate) {
        if (selected < startDate) {
          setEndDate(startDate);
          setStartDate(selected);
        } else {
          setEndDate(selected);
        }
        setInputValue(`${formatDate(startDate)} - ${formatDate(selected)}`);
        setIsOpen(false);
      }
    },
    [currentDate, startDate, endDate, formatDate],
  );

  const handleMonthChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), parseInt(event.target.value), 1));
  }, []);

  const handleYearChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(prev => new Date(parseInt(event.target.value), prev.getMonth(), 1));
  }, []);

  const adjustedFirstDay = useMemo(() => (firstDayOfMonth - 1 + 7) % 7, [firstDayOfMonth]);

  const selectToday = useCallback(() => {
    const today = new Date();
    setStartDate(today);
    setEndDate(null);
    setCurrentDate(today);
    setInputValue(formatDate(today));
    setIsOpen(false);
  }, [formatDate]);

  const clearDate = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    setInputValue('');
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      setInputValue(`${formatDate(startDate)} al ${formatDate(endDate)}`);
    } else if (startDate) {
      setInputValue(formatDate(startDate));
    }
  }, [startDate, endDate, formatDate]);

  const isInRange = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return startDate && endDate && date >= startDate && date <= endDate;
  };

  const isStartOrEndDate = (day: number) => {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return (
      (startDate &&
        date.getDate() === startDate.getDate() &&
        date.getMonth() === startDate.getMonth() &&
        date.getFullYear() === startDate.getFullYear()) ||
      (endDate &&
        date.getDate() === endDate.getDate() &&
        date.getMonth() === endDate.getMonth() &&
        date.getFullYear() === endDate.getFullYear())
    );
  };

  return (
    <div className="relative pb-3" style={{ height: 88 }}>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white" htmlFor={id}>
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
          placeholder="Seleccione un rango de fechas"
          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
            error ? 'ring-red-300 dark:ring-red-400' : 'ring-gray-300 dark:ring-gray-500'
          } placeholder:text-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-inset ${
            error ? 'focus:ring-red-600 dark:focus:ring-red-500' : 'focus:ring-primary-600 dark:focus:ring-primary-200'
          } sm:text-sm sm:leading-6 dark:bg-gray-700 dark:text-white cursor-pointer`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <RiCalendarLine className="w-5 h-5 text-gray-400 dark:text-gray-200" />
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute z-10 w-80 mt-1 bg-white rounded-md shadow-lg dark:bg-gray-800 border"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b dark:border-gray-600">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-700"
              aria-label="Mes anterior"
            >
              <RiArrowLeftLine className="w-5 h-5 text-gray-600 dark:text-gray-200" />
            </button>
            <div className="flex space-x-2">
              <select
                value={currentDate.getMonth()}
                onChange={handleMonthChange}
                className="p-1 text-sm border rounded w-28 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                aria-label="Seleccionar mes"
              >
                {months.map((month, index) => (
                  <option key={month} value={index}>
                    {month.charAt(0).toUpperCase() + month.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={currentDate.getFullYear()}
                onChange={handleYearChange}
                className="p-1 text-sm border rounded w-20 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                aria-label="Seleccionar año"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-700"
              aria-label="Mes siguiente"
            >
              <RiArrowRightLine className="w-5 h-5 text-gray-600 dark:text-gray-200" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 p-4">
            {days.map(day => (
              <div key={day} className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center">
                {day}
              </div>
            ))}
            {Array.from({ length: adjustedFirstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const isSelected = isStartOrEndDate(day);
              const isInRangeDay = isInRange(day);
              const isStartDate = startDate && isSelected && startDate.getDate() === day;
              const isEndDate = endDate && isSelected && endDate.getDate() === day;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => selectDate(day)}
                  className={`p-2 text-sm rounded-md text-center ${
                    isStartDate
                      ? 'bg-primary-600 text-white border border-primary-700 dark:bg-primary-400 dark:border-primary-500'
                      : isEndDate
                        ? 'bg-primary-600 text-white border border-primary-700 dark:bg-primary-400 dark:border-primary-500'
                        : isInRangeDay
                          ? 'bg-primary-200 text-gray-700 dark:bg-primary-500 dark:text-white'
                          : 'text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-300'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between px-6 py-2 border-t dark:border-gray-600">
            <button
              type="button"
              onClick={selectToday}
              className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-300"
            >
              Hoy
            </button>
            <button
              type="button"
              onClick={clearDate}
              className="text-sm font-medium text-red-600 hover:underline dark:text-red-300"
            >
              Limpiar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
