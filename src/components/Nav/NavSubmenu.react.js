// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function NavSubmenu({ className, children }: Props): React.Node {
  const classes = cn({ nav: true, "nav-submenu": true }, className);
  return <div className={classes}>{children}</div>;
}

NavSubmenu.displayName = "Nav.Submenu";

export default NavSubmenu;
