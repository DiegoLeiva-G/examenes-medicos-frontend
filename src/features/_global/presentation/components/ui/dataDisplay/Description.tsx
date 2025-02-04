import { createElement, type Key, type ReactNode } from 'react';
import { RiFolderOpenLine } from '@remixicon/react';

export interface IDescriptionColumnProps<T> {
  title: ReactNode;
  key: Key;
  render: (record: T, index: number) => ReactNode;
}

interface IDescriptionProps<T> {
  columns: IDescriptionColumnProps<T>[];
  loading?: boolean;
}

export const Description = <T,>({ columns, loading = false }: IDescriptionProps<T>): ReactNode => {
  return (
    <div className="mt-3 border-gray-100 dark:border-gray-700">
      <dl className="divide-y divide-gray-100 dark:divide-gray-700">
        {loading ? (
          <div className="flex items-center justify-center h-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="animate-spin"
            >
              <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                opacity="0.25"
              />
              <path
                fill="currentColor"
                d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          </div>
        ) : columns.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-gray-700 dark:text-gray-300">
            <RiFolderOpenLine className="h-10 w-10" />
            <div>No hay datos</div>
          </div>
        ) : (
          <>
            {columns.map((col, index) => (
              <div
                key={col.key}
                className={`px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ${index === 0 ? 'rounded-t-lg' : ''} ${index === columns.length - 1 ? 'rounded-b-lg' : ''} ${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}`}
              >
                <dt className="px-4 text-sm/6 font-medium text-gray-900 dark:text-gray-100">{col.title}</dt>
                <dd className="px-4 mt-1 text-sm/6 text-gray-700 dark:text-gray-300 sm:col-span-2 sm:mt-0">
                  {createElement(col.render)}
                </dd>
              </div>
            ))}
          </>
        )}
      </dl>
    </div>
  );
};
