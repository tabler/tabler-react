import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface TableColProps extends ELProps<HTMLTableCellElement> {
  alignContent?: "left" | "center" | "right";
}

function TableCol({
  className,
  children,
  alignContent,
  ...rest
}: TableColProps) {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <El.Td className={classes} {...rest}>
      {children}
    </El.Td>
  );
}

export default TableCol;
