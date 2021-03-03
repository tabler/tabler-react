import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export interface NavSubmenuProps extends TablerComponentProps {}

function NavSubmenu({ as, className, children, ...rest }: NavSubmenuProps) {
  const classes = cn({ nav: true, "nav-submenu": true }, className);
  const Component = as || El.Div;
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default NavSubmenu;
