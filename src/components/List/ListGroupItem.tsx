import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type ListGroupItemProps = TablerComponentProps<
  "a",
  {
    /**
     * @deprecated use 'as'
     */
    RootComponent?: React.ElementType;

    active?: boolean;
    action?: boolean;
    icon?: string;
    to?: string;
  }
>;

function ListGroupItem({
  className,
  children,
  RootComponent,
  as,
  active,
  action,
  icon,
  ...rest
}: ListGroupItemProps) {
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
  const Component = RootComponent || as || El.A;
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
