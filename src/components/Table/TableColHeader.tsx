import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  alignContent?: "left" | "center" | "right";
};

function TableColHeader({ className, children, colSpan, alignContent }: Props) {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <th className={classes} colSpan={colSpan}>
      {children}
    </th>
  );
}



export default TableColHeader;
