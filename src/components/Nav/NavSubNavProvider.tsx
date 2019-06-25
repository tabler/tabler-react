import React, { useState } from "react";
import NavSubNavContext from "./NavSubNavContext";

export interface NavSubNavProviderProps {
  children: React.ReactChild | React.ReactChildren;
}

export const NavSubNavProvider = function({
  children,
}: NavSubNavProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const value: [boolean, Function, boolean] = [isOpen, setIsOpen, true];
  return (
    <NavSubNavContext.Provider value={value}>
      {children}
    </NavSubNavContext.Provider>
  );
};

export default NavSubNavProvider;
