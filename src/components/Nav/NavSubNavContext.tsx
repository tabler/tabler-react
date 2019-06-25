import React from "react";

export const NavSubNavContext = React.createContext<
  [boolean, Function, boolean]
>([false, () => null, false]);

export default NavSubNavContext;
