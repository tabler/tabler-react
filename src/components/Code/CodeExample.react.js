// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CodeExample({ className, children }: Props): React.Node {
  const classes = cn(`example`, className);
  return <div className={classes}>{children}</div>;
}

export default CodeExample;
