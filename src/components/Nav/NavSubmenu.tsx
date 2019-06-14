import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface NavSubmenuProps extends TablerComponent {
  as?: React.ElementType;
}

function NavSubmenu({
  as: Component = El.Div,
  className,
  children,
  ...rest
}: NavSubmenuProps) {
  const classes = cn({ nav: true, "nav-submenu": true }, className);
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default NavSubmenu;
