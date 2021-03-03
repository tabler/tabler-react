import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface ButtonListProps
  extends TablerComponentProps,
    Omit<HTMLPropsWithoutRef<HTMLDivElement>, "align"> {
  align?: "" | "left" | "center" | "right";
}

function ButtonList({
  className,
  children,
  align = "",
  ...props
}: ButtonListProps) {
  const classes = cn(
    { "btn-list": true, [`text-${align}`]: !!align },
    className
  );
  return (
    <El.Div className={classes} {...props}>
      {children}
    </El.Div>
  );
}

export default ButtonList;
