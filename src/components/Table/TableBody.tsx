import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type TableBodyProps<
  As extends React.ElementType = "table"
> = TablerComponentProps<As>;

function TableBody({ className, children, ...props }: TableBodyProps) {
  const classes = cn(className);
  return (
    <El.Tbody className={classes} {...props}>
      {children}
    </El.Tbody>
  );
}

export default TableBody;
