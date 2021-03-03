import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type HeaderProps<
  As extends React.ElementType = "div"
> = TablerComponentProps<
  As,
  {
    /**
     * A component to use instead of a <div> as the root component
     * @deprecated use 'as'
     */
    RootComponent?: React.ElementType;

    /**
     * The size of the header
     */
    size?: 1 | 2 | 3 | 4 | 5 | 6;
  }
>;

/**
 * A header
 * By default renders a div not a <hX> tag and has no additional spacing classes applied
 */
function Header<As extends React.ElementType = "div">({
  as,
  RootComponent,
  className,
  children,
  size = 1,
  ...props
}: HeaderProps<As>) {
  const classes = cn(`h${size}`, className);
  const Component = RootComponent || as || El.Div;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Header;
