// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +transparent?: boolean
|};

function ListGroup({
  className,
  children,
  transparent,
  ...props
}: Props): React.Node {
  const classes = cn(
    "list-group",
    "mb-0",
    {
      "list-group-transparent": transparent
    },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default ListGroup;
