import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type TableHeaderProps = TablerComponentProps<"thead">;

function TableHeader({ className, children, ...props }: TableHeaderProps) {
  const classes = cn(className);
  return (
    <El.Thead className={classes} {...props}>
      {children}
    </El.Thead>
  );
}

export default TableHeader;
