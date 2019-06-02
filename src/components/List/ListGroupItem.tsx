import * as React from "react";
import cn from "classnames";

import { Icon } from "..";

interface Props {
  children?: React.ReactNode;
  className?: string;
  RootComponent?: React.ElementType;
  active?: boolean;
  action?: boolean;
  icon?: string;
  to?: string;
}

function ListGroupItem({
  className,
  children,
  RootComponent,
  active,
  action,
  icon,
  to,
}: Props) {
  const classes = cn(
    "list-group-item",
    {
      "list-group-item-action": action,
    },
    {
      active: active,
    },
    className
  );
  // const Component = RootComponent || "a";
  return RootComponent ? (
    <RootComponent to={to} className={classes}>
      {icon && (
        <span className="mr-3 icon">
          <Icon prefix="fe" name={icon} />{" "}
        </span>
      )}
      {children}
    </RootComponent>
  ) : (
    <a className={classes} href={to}>
      {icon && (
        <span className="mr-3 icon">
          <Icon prefix="fe" name={icon} />{" "}
        </span>
      )}
      {children}
    </a>
  );
}

ListGroupItem.displayName = "List.GroupItem";

/** @component */
export default ListGroupItem;
