// @flow
import * as React from "react";
import cn from "classnames";

type Props = {| +children?: React.Node, +className?: string |};

function TableBody({ className, children, ...props }: Props): React.Node {
  const classes = cn(className);
  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  );
}

TableBody.displayName = "Table.Body";

export default TableBody;
