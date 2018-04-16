// @flow
import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +active?: boolean,
  +icon?: string,
|};

function NavSubmenuItem({
  className,
  RootComponent,
  icon,
  children,
  active = false,
  ...rest
}: Props): React.Node {
  const classes = cn({ "nav-item": true, active: active }, className);
  const Component = RootComponent || "a";
  return (
    <Component className={classes} {...rest}>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {children && children}
    </Component>
  );
}

export default NavSubmenuItem;
