// @flow

import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function TableCol({ className, children, ...props }: Props): React.Node {
  const classes = cn(className);
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
}

TableCol.displayName = "Table.Col";

export default TableCol;
