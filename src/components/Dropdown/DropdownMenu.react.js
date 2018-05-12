// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +position?: string,
  /**
   * Display an arrow poiting towards the trigger
   */
  +arrow?: boolean,
  +show?: boolean,
|};

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu({
  className,
  children,
  position = "",
  arrow,
  show,
}: Props): React.Node {
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${position}`]: position,
      [`dropdown-menu-arrow`]: arrow,
      show: show,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

DropdownMenu.displayName = "Dropdown.Menu";

export default DropdownMenu;
