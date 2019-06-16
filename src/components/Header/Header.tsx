import React, { HTMLAttributes, HTMLProps } from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface HeaderProps<AS extends HTMLElement = HTMLDivElement>
  extends ELProps,
    Omit<HTMLProps<AS>, "as"> {
  /**
   * A component to use instead of a <div> as the root component
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  as?: React.ElementType;
  /**
   * The size of the header
   */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * A header
 * By default renders a div not a <hX> tag and has no additional spacing classes applied
 */
function Header<AS extends HTMLElement = HTMLDivElement>({
  as = El.Div,
  RootComponent,
  className,
  children,
  size = 1,
  ...props
}: HeaderProps<AS>) {
  const classes = cn(`h${size}`, className);
  const Component = RootComponent || as;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Header;
