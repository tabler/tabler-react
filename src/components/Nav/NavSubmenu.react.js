// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function NavSubmenu({ className, ...props }: Props): React.Node {
  const classes = cn({ nav: true, "nav-submenu": true }, className);
  return <div className={classes} {...props} />;
}

export default NavSubmenu;
