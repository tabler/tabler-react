import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface ButtonListProps extends ELProps<HTMLDivElement> {
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
