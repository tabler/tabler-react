// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string
|};

function NavSubmenu({ className, children, ...props }: Props): React.Node {
  const classes = cn({ nav: true, "nav-submenu": true }, className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default NavSubmenu;
