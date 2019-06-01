import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function NavSubmenu({ className, children }: Props) {
  const classes = cn({ nav: true, "nav-submenu": true }, className);
  return <div className={classes}>{children}</div>;
}

NavSubmenu.displayName = "Nav.Submenu";

export default NavSubmenu;
