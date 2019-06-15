// @flow

import * as React from "react";
import cn from "classnames";
import Button from "../Button";
import Icon from "../Icon";

import { Reference } from "react-popper";
import { ReferenceChildrenProps } from "react-popper";
import DropdownContext from "./DropdownContext";
import { ButtonProps } from "../Button/Button";
import { colors } from "../../colors";

export interface DropdownTriggerProps extends ButtonProps {
  /**
   * Display an arrow alongside the trigger content
   */
  toggle?: boolean;
  /**
   * The value to be displayed within the trigger if children is not included
   */
  value?: string;
  /**
   * Render the trigger as an <a> tag or a Button
   * @deprecated dropdowns should not be links
   */
  type?: "link" | "button";
  /**
   * The background color for a Button trigger
   */
  color?: colors;
  /**
   * An Icon displayed to the left of the trigger content
   */
  icon?: string;
  /**
   * Is this trigger being used as a NavLink
   */
  isNavLink?: boolean;
  /**
   * Is this trigger beind used as a Card.Header option
   */
  isOption?: boolean;
  /**
   * Handle the onClick of this trigger
   * @deprecated use context
   */
  onClick?: (e: React.MouseEvent) => void;
}

/**
 * Provides the trigger element for a Dropdown
 */
function DropdownTrigger({
  className,
  toggle = true,
  value,
  children,
  icon,
  color,
  isNavLink,
  isOption,
  ...rest
}: DropdownTriggerProps) {
  const [isOpen, setIsOpen] = React.useContext(DropdownContext);

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

  return (
    <Reference>
      {({ ref }: ReferenceChildrenProps) => (
        <Button
          className={classes}
          color={color}
          isDropdownToggle
          isOption={isOption}
          onClick={() => setIsOpen(!isOpen)}
          rootRef={ref}
          {...rest}
        >
          {childrenFragment}
        </Button>
      )}
    </Reference>
  );
}

/** @component */
export default DropdownTrigger;
