// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function TableRow({ className, children, ...props }: Props): React.Node {
  const classes = cn(className);
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
}

TableRow.displayName = "Table.Row";

export default TableRow;
