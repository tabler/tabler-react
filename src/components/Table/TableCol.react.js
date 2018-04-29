// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +alignContent?: "left" | "center" | "right",
|};

function TableCol({
  className,
  children,
  alignContent = "",
}: Props): React.Node {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return <td className={classes}>{children}</td>;
}

TableCol.displayName = "Table.Col";

export default TableCol;
