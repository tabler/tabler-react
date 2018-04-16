// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CodeExample({ className, ...props }: Props): React.Node {
  const classes = cn(`example`, className);
  return <div className={classes} {...props} />;
}

export default CodeExample;
