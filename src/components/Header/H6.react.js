// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

/**
 * A Header component rendered as a h6 HTML element with a margin below
 */
function H6({ className, children }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h6" className={classes} size={6}>
      {children}
    </Header>
  );
}

H6.displayName = "Header.H6";

export default H6;
