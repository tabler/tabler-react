import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import { colors } from "../../colors";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

type StampProps = TablerComponentProps<
  "span",
  {
    size?: "sm" | "md";
    icon?: string;
    color?: colors;
  }
>;

function Stamp({
  children,
  className,
  size = "md",
  icon,
  color,
  ...rest
}: StampProps) {
  const classes = cn(
    {
      stamp: true,
      [`stamp-${size}`]: size,
      [`bg-${color}`]: color,
      "text-white": true,
    },
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
