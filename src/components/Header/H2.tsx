import React from "react";
import Header, { HeaderProps } from "./Header";

export interface H2Props extends HeaderProps {}

/**
 * A Header component rendered as a h2 HTML element with a margin below
 */
function H2({ children, as, mt = 0, mb = 4, size = 2, ...props }: H2Props) {
  return (
    <Header as={as || "h2"} size={size} mt={mt} mb={mb} {...props}>
      {children}
    </Header>
  );
}

export default H2;
