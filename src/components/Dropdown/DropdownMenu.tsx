// @flow

import * as React from "react";
import cn from "classnames";
import { Popper } from "react-popper";

import { PopperChildrenProps } from "react-popper";
import DropdownContext from "./DropdownContext";

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
   * @deprecated use context
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
}: Props) {
  const [isOpen] = React.useContext(DropdownContext);
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${arrowPosition}`]: arrowPosition,
      [`dropdown-menu-arrow`]: arrow,
      show: isOpen,
    },
    className
  );
  return (
    <Popper placement={position} eventsEnabled={true} positionFixed={false}>
      {({ ref, style, placement }: PopperChildrenProps) => {
        return (
          isOpen && (
            <div
              className={classes}
              data-placement={placement}
              style={style}
              ref={ref}
            >
              {children}
            </div>
          )
        );
      }}
    </Popper>
  );
}

DropdownMenu.displayName = "Dropdown.Menu";

export default DropdownMenu;
