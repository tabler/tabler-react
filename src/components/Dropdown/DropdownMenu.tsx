// @flow

import * as React from "react";
import cn from "classnames";
import { Popper } from "react-popper";

import { PopperChildrenProps } from "react-popper";

export interface Props {
  children?: React.ReactNode;
  className?: string;
  position?: any;
  /**
   * Display an arrow pointing towards the trigger
   */
  arrow?: boolean;
  /**
   * The position of the arrow pointing towards the trigger
   */
  arrowPosition?: "left" | "right";
  rootRef?: (el: HTMLElement) => void;
  /**
   * Show the DropdownMenu
   */
  show?: boolean;
}

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu({
  className,
  children,
  position = "bottom",
  arrow,
  arrowPosition = "left",
  rootRef,
  show = false,
}: Props) {
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${arrowPosition}`]: arrowPosition,
      [`dropdown-menu-arrow`]: arrow,
      show: show,
    },
    className
  );
  return show ? (
    <Popper placement={position} eventsEnabled={true} positionFixed={false}>
      {({ ref, style, placement }: PopperChildrenProps) => {
        return (
          <div
            className={classes}
            data-placement={placement}
            style={style}
            ref={ref}
          >
            {children}
          </div>
        );
      }}
    </Popper>
  ) : null;
}

DropdownMenu.displayName = "Dropdown.Menu";

export default DropdownMenu;
