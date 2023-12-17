import * as React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Index: React.FunctionComponent<Props> = ({ children,className }) => {
  return <div className={`wrapper ${className}`}>{children}</div>;
};

export default Index;