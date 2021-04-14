import React, { useContext } from "react";

export const ClassNamesContext = React.createContext<{ [key: string]: string }>(
  {}
);

export const useClassNamesContext = () => useContext(ClassNamesContext);

export type ClassNamesProviderProps = {
  value: { [key: string]: string };
};

export const ClassNamesProvider: React.FC<ClassNamesProviderProps> = ({
  children,
  value,
}) => {
  return (
    <ClassNamesContext.Provider value={value}>
      {children}
    </ClassNamesContext.Provider>
  );
};
