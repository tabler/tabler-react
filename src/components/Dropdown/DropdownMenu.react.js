// @flow

import * as React from "react";
import cn from "classnames";

import type { Placement } from "react-popper";

import type { Style } from "typed-styles";
type StyleOffsets = { top: number, left: number };
type StylePosition = { position: "absolute" | "fixed" };

type Props = {|
  +children?: React.Node,
  +className?: string,
  +position?: Placement,
  /**
   * Display an arrow poiting towards the trigger
   */
  +arrow?: boolean,
  +style?: Style & StyleOffsets & StylePosition,
  +rootRef?: Function,
  +show?: boolean,
|};

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu({
  className,
  children,
  position = "auto",
  arrow,
  style,
  rootRef,
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
  return (
    <div
      className={classes}
      data-placement={position}
      style={style}
      ref={rootRef}
    >
      {children}
    </div>
  );
}

DropdownMenu.displayName = "Dropdown.Menu";

export default DropdownMenu;
