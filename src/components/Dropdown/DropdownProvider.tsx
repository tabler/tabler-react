import React, { useState } from "react";
import DropdownContext from "./DropdownContext";

export interface DropdownProviderProps {
  children: React.ReactChild | React.ReactChildren;
}

export const DropdownProvider = function({ children }: DropdownProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const value: [boolean, Function] = [isOpen, setIsOpen];
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
