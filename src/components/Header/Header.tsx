import React, { HTMLAttributes } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";

export interface HeaderProps
  extends HTMLAttributes<HTMLHeadingElement>,
    TablerComponent {
  /**
   * A component to use instead of a <div> as the root component
   */
  RootComponent?: React.ElementType;
  /**
   * The size of the header
   */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * A header
 * By default renders a div not a <hX> tag and has no additional spacing classes applied
 */
function Header({
  RootComponent,
  className,
  children,
  size = 1,
  ...props
}: HeaderProps) {
  const classes = cn(`h${size}`, className);
  const Component = RootComponent || "div";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Header;
