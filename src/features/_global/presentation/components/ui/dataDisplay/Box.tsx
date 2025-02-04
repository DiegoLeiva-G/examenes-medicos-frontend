import type { FC, CSSProperties, ReactNode } from 'react';

interface IBoxProps extends CSSProperties {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Box: FC<IBoxProps> = props => {
  const { id, className, children, ...leftProps } = props;

  return (
    <div id={id} className={className} style={leftProps}>
      {children}
    </div>
  );
};

export default Box;
