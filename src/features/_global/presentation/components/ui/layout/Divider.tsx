import { type FC } from 'react';

interface IDividerProps {
  title?: string;
}

export const Divider: FC<IDividerProps> = ({ title }) => {
  return (
    <>
      {title && <h2 className={'mt-6 text-base/7 font-semibold text-gray-900 dark:text-gray-50'}>{title}</h2>}
      <div className="relative mt-2">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
    </>
  );
};
