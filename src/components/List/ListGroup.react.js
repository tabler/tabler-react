// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +transparent?: boolean,
|};

function ListGroup({ className, children, transparent }: Props): React.Node {
  const classes = cn(
    "list-group",
    "mb-0",
    {
      "list-group-transparent": transparent,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

ListGroup.displayName = "List.Group";

export default ListGroup;
