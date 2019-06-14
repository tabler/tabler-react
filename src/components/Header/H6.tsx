import React from "react";
import Header, { HeaderProps } from "./Header";

export interface H6Props extends HeaderProps {}

/**
 * A Header component rendered as a h6 HTML element with a margin below
 */
function H6({
  children,
  RootComponent = "h6",
  mt = 0,
  mb = 4,
  size = 6,
  ...props
}: H6Props) {
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

export default H6;
