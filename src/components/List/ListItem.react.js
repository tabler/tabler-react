// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +inline?: boolean,
|};

function ListItem({ className, children, inline }: Props): React.Node {
  const classes = cn({ "list-inline-item": inline }, className);
  return <li className={classes}>{children}</li>;
}

ListItem.displayName = "List.Item";

export default ListItem;
