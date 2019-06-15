import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";

interface StampProps extends ELProps<HTMLSpanElement> {
  size?: "sm" | "md";
  icon?: string;
  color?: colors;
}

function Stamp({
  children,
  className,
  size = "md",
  icon,
  color,
  ...rest
}: StampProps) {
  const classes = cn(
    { stamp: true, [`stamp-${size}`]: size, [`bg-${color}`]: color },
    className
  );
  return (
    <El.Span className={classes} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </El.Span>
  );
}

export default Stamp;
