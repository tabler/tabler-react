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
   * Display an arrow pointing towards the trigger
   */
  +arrow?: boolean,
  /**
   * The position of the arrow pointing towards the trigger
   */
  +arrowPosition?: "left" | "right",
  +style?: Style & StyleOffsets & StylePosition,
  +rootRef?: Function,
  /**
   * Show the DropdownMenu
   */
  +show?: boolean,
|};

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu({
  className,
  children,
  position = "bottom",
  arrow,
  arrowPosition = "left",
  style,
  rootRef,
  show,
}: Props): React.Node {
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${arrowPosition}`]: arrowPosition,
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
