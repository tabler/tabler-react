import React from "react";
import Header, { HeaderProps } from "./Header";

export interface H1Props extends HeaderProps {}

/**
 * A Header component rendered as a h1 HTML element with a margin below
 */
function H1({
  children,
  RootComponent = "h1",
  mt = 0,
  mb = 4,
  size = 1,
  ...props
}: H1Props) {
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

export default H1;
