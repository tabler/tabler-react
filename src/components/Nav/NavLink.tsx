import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface NavLinkProps extends TablerComponent {
  as?: React.ElementType;
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
  as = El.A,
  icon,
  active = false,
  hasSubNav,
  rootRef,
  ...props
}: NavLinkProps) {
  const classes = cn({ "nav-link": true, active: active }, className);

  const Component = RootComponent || as;

  return (
    <Component className={classes} ref={rootRef} {...props}>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {children}
    </Component>
  );
}

/** @component */
export default NavLink;
