import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";
import { TablerComponent } from "../../types";

interface Props extends TablerComponent {
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  as?: React.ElementType;
  active?: boolean;
  action?: boolean;
  icon?: string;
  to?: string;
}

function ListGroupItem({
  className,
  children,
  RootComponent,
  as = "a",
  active,
  action,
  icon,
  ...rest
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
  const Component = as || RootComponent;
  return (
    <Component className={classes} {...rest}>
      {icon && (
        <span className="mr-3 icon">
          <Icon prefix="fe" name={icon} />{" "}
        </span>
      )}
      {children}
    </Component>
  );
}

/** @component */
export default ListGroupItem;
