// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +position?: string,
  +arrow?: boolean,
|};

function DropdownMenu({
  className,
  children,
  position = "",
  arrow,
  ...rest
}: Props): React.Node {
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${position}`]: position,
      [`dropdown-menu-arrow`]: arrow,
    },
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default DropdownMenu;
