import * as React from "react";
import cn from "classnames";
import Header from "./Header";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

/**
 * A Header component rendered as a h4 HTML element with a margin below
 */
function H4({ className, children }: Props) {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h4" className={classes} size={4}>
      {children}
    </Header>
  );
}



export default H4;
