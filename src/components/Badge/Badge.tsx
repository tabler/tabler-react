import * as React from "react";
import cn from "classnames";
import { TablerComponent, MouseEvents } from "../../types";
import { colors, softColors } from "../../colors";

export interface Props extends TablerComponent, MouseEvents {
  color?: colors;
  textColor?: colors;
  pill?: boolean;
  as?: React.ElementType;
  href?: string;
}

/**
 * A small colored rectangle with rounded corners.
 */
function Badge({
  className,
  children,
  as: Component = "span",
  color = "primary",
  textColor = "white",
  pill,
  ...rest
}: Props) {
  const _className = cn(
    {
      badge: true,
      [`bg-${color}`]: color,
      [`text-${textColor}`]: softColors.includes(color) ? false : textColor,
      "badge-pill": pill,
    },
    className
  );
  return (
    <Component className={_className} {...rest}>
      {children}
    </Component>
  );
}

export default Badge;
