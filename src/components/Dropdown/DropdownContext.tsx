import React from "react";

export const DropdownContext = React.createContext<[boolean, Function]>([
  false,
  () => null,
]);

export default DropdownContext;
