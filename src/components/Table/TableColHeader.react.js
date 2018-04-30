// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +colSpan?: number,
  +alignContent?: "left" | "center" | "right",
|};

function TableColHeader({
  className,
  children,
  colSpan,
  alignContent = "",
}: Props): React.Node {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <th className={classes} colSpan={colSpan}>
      {children}
    </th>
  );
}

TableColHeader.displayName = "Table.ColHeader";

export default TableColHeader;
