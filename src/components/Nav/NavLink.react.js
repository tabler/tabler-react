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

function NavLink({
  children,
  className,
  RootComponent,
  icon,
  active = false,
}: Props): React.Node {
  const classes = cn({ "nav-link": true, active: active }, className);
  const Component = RootComponent || "a";
  return (
    <Component className={classes}>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {children}
    </Component>
  );
}

export default NavLink;
