// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function Container({ className, children }: Props): React.Node {
  const classes = cn("container", className);
  return <div className={classes}>{children}</div>;
}

export default Container;
