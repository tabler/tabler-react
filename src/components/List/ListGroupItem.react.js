// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +active?: boolean,
  +icon?: string,
|};

function ListGroupItem({
  className,
  children,
  RootComponent,
  active,
  icon,
}: Props): React.Node {
  const classes = cn(
    "list-group-item",
    "list-group-item-action",
    {
      active: active,
    },
    className
  );
  const Component = RootComponent || "a";
  return (
    <Component className={classes}>
      {icon && (
        <span className="icon mr-3">
          <i className={`fe fe-${icon}`} />{" "}
        </span>
      )}
      {children}
    </Component>
  );
}

export default ListGroupItem;
