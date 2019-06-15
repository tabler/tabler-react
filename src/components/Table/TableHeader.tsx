import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface TableHeaderProps extends ELProps<HTMLTableSectionElement> {}

function TableHeader({ className, children, ...props }: TableHeaderProps) {
  const classes = cn(className);
  return (
    <El.Thead className={classes} {...props}>
      {children}
    </El.Thead>
  );
}

export default TableHeader;
