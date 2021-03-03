import React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export type NavSubNavProps = TablerComponentProps<
  "div",
  {
    collapsed?: boolean;
    show?: boolean;
  }
>;

function NavSubNav({
  as,
  className,
  children,
  collapsed = true,
  show = false,
  ...rest
}: NavSubNavProps) {
  const classes = cn(
    { "navbar-subnav": true, collapse: true, collapsed, show },
    className
  );
  const Component = as || El.Div;
  return (
    <Component className={classes} {...rest}>
      <ul className="nav">{children}</ul>
    </Component>
  );
}

export default NavSubNav;
