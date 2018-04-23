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
  +icon?: string,
|};

function DropdownTrigger({
  className,
  toggle,
  value,
  children,
  type = "link",
  icon,
}: Props): React.Node {
  const classes = cn({ "dropdown-toggle": toggle }, className);

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
    <Button className={classes} isDropdownToggle>
      {childrenFragment}
    </Button>
  );
}

DropdownTrigger.displayName = "Dropdown.Trigger";

export default DropdownTrigger;
