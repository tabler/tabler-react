// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function H2({ className, children, ...props }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header as="h2" className={classes} size={2} {...props}>
      {children}
    </Header>
  );
}

export default H2;
