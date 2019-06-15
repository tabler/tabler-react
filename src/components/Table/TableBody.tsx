import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface TableBodyProps extends ELProps<HTMLTableSectionElement> {
  children?: React.ReactNode;
  className?: string;
}

function TableBody({ className, children, ...props }: TableBodyProps) {
  const classes = cn(className);
  return (
    <El.Tbody className={classes} {...props}>
      {children}
    </El.Tbody>
  );
}

export default TableBody;
