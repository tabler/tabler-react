import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface NavSubmenuItemProps extends TablerComponent {
  as?: React.ElementType;
  RootComponent?: React.ElementType;
  active?: boolean;
  icon?: string;
}

function NavSubmenuItem({
  className,
  as = El.A,
  RootComponent,
  icon,
  children,
  active = false,
  ...rest
}: NavSubmenuItemProps) {
  const classes = cn({ "nav-item": true, active: active }, className);
  const Component = RootComponent || as;
  return (
    <Component className={classes} {...rest}>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />
        </React.Fragment>
      )}
      {children}
    </Component>
  );
}

export default NavSubmenuItem;
