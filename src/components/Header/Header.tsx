import * as React from "react";
import cn from "classnames";

interface Props {
  /**
   * A component to use instead of a <div> as the root component
   */
  RootComponent?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  /**
   * The size of the header
   */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * A header
 * By default renders a div not a <hX> tag and has no additional spacing classes applied
 */
function Header({ RootComponent, className, children, size = 1 }: Props) {
  const classes = cn(`h${size}`, className);
  const Component = RootComponent || "div";
  return <Component className={classes}>{children}</Component>;
}

export default Header;
