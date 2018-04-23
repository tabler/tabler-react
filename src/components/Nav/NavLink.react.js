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
  +to?: string,
  +hasSubNav?: boolean,
|};

function NavLink({
  children,
  className,
  RootComponent,
  icon,
  active = false,
  to,
  hasSubNav,
}: Props): React.Node {
  const classes = cn({ "nav-link": true, active: active }, className);

  const childrenForAll = (
    <React.Fragment>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {children}
    </React.Fragment>
  );

  return RootComponent ? (
    <RootComponent
      className={classes}
      to={to}
      data-toggle={hasSubNav && "dropdown"}
    >
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={classes} href={to} data-toggle={hasSubNav && "dropdown"}>
      {childrenForAll}
    </a>
  );
}

NavLink.displayName = "Nav.Link";

export default NavLink;
