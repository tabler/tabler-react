import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type TableColHeaderProps = TablerComponentProps<"th">;

function TableColHeader({
  className,
  children,
  alignContent,
  ...rest
}: TableColHeaderProps) {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <El.Th className={classes} {...rest}>
      {children}
    </El.Th>
  );
}

export default TableColHeader;
