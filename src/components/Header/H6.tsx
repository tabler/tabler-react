import * as React from "react";
import cn from "classnames";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

/**
 * A Header component rendered as a h6 HTML element with a margin below
 */
function H6({ className, children }: Props) {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h6" className={classes} size={6}>
      {children}
    </Header>
  );
}



export default H6;
