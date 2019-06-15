import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface TableRowProps extends ELProps<HTMLTableRowElement> {}

function TableRow({ className, children, ...props }: TableRowProps) {
  const classes = cn(className);
  return (
    <El.Tr className={classes} {...props}>
      {children}
    </El.Tr>
  );
}

export default TableRow;
