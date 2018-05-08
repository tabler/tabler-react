// @flow

import * as React from "react";
import cn from "classnames";
import { Button, Icon } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +toggle?: boolean,
  +value?: string,
  +type?: "link" | "button",
  +color?: string,
  +icon?: string,
  +isNavLink?: boolean,
  +isOption?: boolean,
|};

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
    <a className={classes} data-toggle="dropdown">
      {childrenFragment}
    </a>
  ) : (
    <Button
      className={classes}
      color={color}
      isDropdownToggle
      isOption={isOption}
    >
      {childrenFragment}
    </Button>
  );
}

DropdownTrigger.displayName = "Dropdown.Trigger";

/** @component */
export default DropdownTrigger;
