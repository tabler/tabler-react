// @flow

import * as React from "react";
import cn from "classnames";
import { Button, Icon } from "../";

import { Reference } from "react-popper";
import type { ReferenceChildrenProps } from "react-popper";

type Props = {|
  +children?: React.Node,
  +className?: string,
  /**
   * Display an arrow alongside the trigger content
   */
  +toggle?: boolean,
  /**
   * The value to be displayed within the trigger if children is not included
   */
  +value?: string,
  /**
   * Render the trigger as an <a> tag or a Button
   */
  +type?: "link" | "button",
  /**
   * The background color for a Button trigger
   */
  +color?: string,
  /**
   * An Icon displayed to the left of the trigger content
   */
  +icon?: string,
  /**
   * Is this trigger being used as a NavLink
   */
  +isNavLink?: boolean,
  /**
   * Is this trigger beind used as a Card.Header option
   */
  +isOption?: boolean,
  /**
   * Handle the onClick of this trigger
   */
  +onClick?: (
    e: SyntheticMouseEvent<HTMLInputElement> | SyntheticMouseEvent<HTMLElement>
  ) => void,
  +rootRef?: (?HTMLElement) => void,
|};

/**
 * Provides the trigger element for a Dropdown
 */
function DropdownTrigger({
  className,
  toggle = true,
  value,
  children,
  type = "link",
  icon,
  color,
  isNavLink,
  isOption,
  onClick,
  rootRef,
}: Props): React.Node {
  const classes = cn(
    { "dropdown-toggle": toggle, "nav-link": isNavLink },
    className
  );

  const childrenFragment = (
    <React.Fragment>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </React.Fragment>
  );

  return type === "link" ? (
    <Reference>
      {({ ref }: ReferenceChildrenProps) => (
        <a className={classes} onClick={onClick} ref={ref}>
          {childrenFragment}
        </a>
      )}
    </Reference>
  ) : (
    <Reference>
      {({ ref }: ReferenceChildrenProps) => (
        <Button
          className={classes}
          color={color}
          isDropdownToggle
          isOption={isOption}
          onClick={onClick}
          rootRef={ref}
        >
          {childrenFragment}
        </Button>
      )}
    </Reference>
  );
}

DropdownTrigger.displayName = "Dropdown.Trigger";

/** @component */
export default DropdownTrigger;
