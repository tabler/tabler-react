// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string
|};

function H3({ className, children, ...props }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header as="h3" className={classes} size={3} {...props}>
      {children}
    </Header>
  );
}

export default H3;
