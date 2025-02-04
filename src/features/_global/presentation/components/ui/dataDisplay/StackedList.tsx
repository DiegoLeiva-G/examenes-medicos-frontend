import { type FC } from 'react';

interface IItem {
  name: string;
  description: string;
  href: string;
}

interface IItemListProps {
  items: IItem[];
}

const StackedList: FC<IItemListProps> = ({ items }) => {
  return (
    <ul
      role="list"
      className="divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700 sm:rounded-xl"
    >
      {items.map(item => (
        <li
          key={item.name}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 dark:hover:bg-gray-700 sm:px-6"
        >
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-md font-semibold leading-6 text-gray-900 dark:text-gray-100">
                <a href={item.href}>
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {item.name}
                </a>
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { StackedList };
