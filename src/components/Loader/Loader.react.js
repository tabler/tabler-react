// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function Loader({ className, children }: Props): React.Node {
  const classes = cn({ loader: true }, className);
  return <div className={classes}>{children}</div>;
}

Loader.displayName = "Loader";

export default Loader;
