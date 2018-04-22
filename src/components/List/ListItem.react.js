// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function ListItem({ className, children }: Props): React.Node {
  const classes = cn(className);
  return <li className={classes}>{children}</li>;
}

export default ListItem;
