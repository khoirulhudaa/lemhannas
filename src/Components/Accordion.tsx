/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

const Accordion: React.FC = ({title, children}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded mb-4">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={toggleAccordion}>
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion