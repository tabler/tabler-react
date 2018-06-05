// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

/**
 * A Header component rendered as a h1 HTML element with a margin below
 */
function H1({ className, children }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h1" className={classes} size={1}>
      {children}
    </Header>
  );
}

H1.displayName = "Header.H1";

export default H1;
