import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export interface NavSubmenuItemProps extends TablerComponentProps {
  RootComponent?: React.ElementType;
  active?: boolean;
  icon?: string;
  [key: string]: any;
}

function NavSubmenuItem({
  className,
  as,
  RootComponent,
  icon,
  children,
  active = false,
  ...rest
}: NavSubmenuItemProps) {
  const classes = cn({ "nav-item": true, active: active }, className);
  const Component = RootComponent || as || El.A;
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
