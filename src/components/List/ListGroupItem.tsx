import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface ListGroupItemProps extends ELProps<HTMLAnchorElement> {
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
  as = El.A,
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
  const Component = RootComponent || as;
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
