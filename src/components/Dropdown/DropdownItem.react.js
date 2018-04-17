// @flow

import * as React from "react";
import cn from "classnames";
import { Icon, Badge } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +icon?: string,
  +value?: string,
  +badge?: string,
|};

function DropdownItem({
  className,
  icon,
  value,
  children,
  badge,
}: Props): React.Node {
  const classes = cn({ "dropdown-item": true }, className);
  return (
    <a className={classes}>
      {badge && (
        <span className="float-right">
          <Badge>{badge}</Badge>
        </span>
      )}
      {icon && (
        <React.Fragment>
          <Icon name={icon} className="dropdown-icon" />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </a>
  );
}

export default DropdownItem;
