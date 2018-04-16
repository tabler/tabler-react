// @flow

import * as React from "react";
import cn from "classnames";

import { Icon } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +position?: string,
  +arrow?: boolean,
|};

function DropdownMenu({
  className,
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
  return <div className={classes} {...rest} />;
}

export default DropdownMenu;
