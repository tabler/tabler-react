// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +colSpan?: number,
  +alignContent?: "left" | "center" | "right",
|};

function TableCol({
  className,
  children,
  alignContent = "",
  colSpan,
}: Props): React.Node {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <td className={classes} colSpan={colSpan}>
      {children}
    </td>
  );
}

TableCol.displayName = "Table.Col";

export default TableCol;
