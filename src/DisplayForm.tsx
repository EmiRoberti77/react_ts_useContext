import React from 'react';

interface DisplayFormProps {
  children: React.ReactNode;
}

const DisplayForm: React.FC<DisplayFormProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default DisplayForm;
