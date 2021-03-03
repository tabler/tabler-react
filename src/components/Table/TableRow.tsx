import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type TableRowProps = TablerComponentProps<"tr">;

function TableRow({ className, children, ...props }: TableRowProps) {
  const classes = cn(className);
  return (
    <El.Tr className={classes} {...props}>
      {children}
    </El.Tr>
  );
}

export default TableRow;
