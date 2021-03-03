import React from "react";
import Header, { HeaderProps } from "./Header";

export interface H5Props extends HeaderProps {}

/**
 * A Header component rendered as a h5 HTML element with a margin below
 */
function H5({ children, as, mt = 0, mb = 4, size = 5, ...props }: H5Props) {
  return (
    <Header as={as || "h5"} size={size} mt={mt} mb={mb} {...props}>
      {children}
    </Header>
  );
}

export default H5;
