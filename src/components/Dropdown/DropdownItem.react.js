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
  +badgeType?: string,
  +to?: string,
  +RootComponent?: React.ElementType,
|};

function DropdownItem({
  className,
  icon,
  value,
  children,
  badge,
  badgeType,
  to,
  RootComponent,
}: Props): React.Node {
  const classes = cn({ "dropdown-item": true }, className);
  const childrenForAll = (
    <React.Fragment>
      {badge && (
        <span className="float-right">
          <Badge color={badgeType}>{badge}</Badge>
        </span>
      )}
      {icon && (
        <React.Fragment>
          <Icon name={icon} className="dropdown-icon" />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </React.Fragment>
  );
  return RootComponent ? (
    <RootComponent className={classes} to={to}>
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={classes} href={to}>
      {childrenForAll}
    </a>
  );
}

DropdownItem.displayName = "Dropdown.Item";

export default DropdownItem;
