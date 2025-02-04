import { type ReactNode, type FC } from 'react';

export interface ColumnProps {
  colSpan?:
    | 'col-span-1'
    | 'col-span-2'
    | 'col-span-3'
    | 'col-span-4'
    | 'col-span-5'
    | 'col-span-6'
    | 'col-span-7'
    | 'col-span-8'
    | 'col-span-9'
    | 'col-span-10'
    | 'col-span-11'
    | 'col-span-full';
  children: ReactNode;
  className?: string;
}

const Column: FC<ColumnProps> = ({ colSpan = 'col-span-full', children, className }) => {
  return <div className={`${colSpan} ${className}`}>{children}</div>;
};

export { Column };
