// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +colSpan?: number,
|};

function TableColHeader({ className, children, colSpan }: Props): React.Node {
  const classes = cn(className);
  return (
    <th className={classes} colSpan={colSpan}>
      {children}
    </th>
  );
}

export default TableColHeader;
