import * as React from "react";
import cn from "classnames";

type Props = { children?: React.ReactNode; className?: string };

function TableBody({ className, children, ...props }: Props) {
  const classes = cn(className);
  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  );
}

TableBody.displayName = "Table.Body";

export default TableBody;
