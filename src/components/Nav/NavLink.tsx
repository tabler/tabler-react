import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

interface Props {
  children?: React.ReactNode;
  className?: string;
  RootComponent?: React.ElementType;
  active?: boolean;
  icon?: string;
  to?: string;
  hasSubNav?: boolean;
  rootRef?: any;
  useExact?: boolean;
}

function NavLink({
  children,
  className,
  RootComponent,
  icon,
  active = false,
  to,
  hasSubNav,
  rootRef,
  useExact,
}: Props) {
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
    <RootComponent exact={useExact || false} className={classes} to={to}>
      {childrenForAll}
    </RootComponent>
  ) : (
    <a className={classes} href={to} ref={rootRef}>
      {childrenForAll}
    </a>
  );
}



/** @component */
export default NavLink;
