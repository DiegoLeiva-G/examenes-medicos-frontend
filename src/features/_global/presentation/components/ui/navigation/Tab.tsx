import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface ITabItem {
  name: string;
  href: string;
  icon?: React.ElementType | null;
  current: boolean;
}

export interface ITabProps {
  items: ITabItem[];
}

export const Tab: React.FC<ITabProps> = ({ items }) => {
  const navigate = useNavigate();
  const classNames = useCallback((...classes: string[]) => {
    return classes.filter(Boolean).join(' ');
  }, []);

  return (
    <div className="mb-4">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Seleccione una sección
        </label>
        <select
          id="items"
          name="items"
          className="block w-full rounded-md bg-white text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500"
          onChange={e => {
            navigate(e.target.value);
          }}
        >
          {items.map(item => (
            <option key={item.name} value={item.href}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav aria-label="Tabs" className="flex items-center justify-between -mb-px space-x-8">
            <div className="flex space-x-8">
              {items.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'border-primary-500 text-primary-900 dark:border-primary-400 dark:text-primary-100'
                      : 'border-transparent text-gray-600 hover:border-gray-400 hover:text-gray-700 dark:text-gray-300 hover:dark:text-gray-300',
                    'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium',
                  )}
                >
                  {item.icon && (
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current
                          ? 'text-primary-500 dark:text-primary-300'
                          : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 group-hover:dark:text-gray-300',
                        '-ml-0.5 mr-2 h-5 w-5',
                      )}
                    />
                  )}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
