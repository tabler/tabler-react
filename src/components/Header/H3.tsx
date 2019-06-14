import React from "react";
import Header, { HeaderProps } from "./Header";

export interface H3Props extends HeaderProps {}

/**
 * A Header component rendered as a h3 HTML element with a margin below
 */
function H3({
  children,
  RootComponent = "h3",
  mt = 0,
  mb = 4,
  size = 3,
  ...props
}: H3Props) {
  return (
    <Header
      RootComponent={RootComponent}
      size={size}
      mt={mt}
      mb={mb}
      {...props}
    >
      {children}
    </Header>
  );
}

export default H3;
