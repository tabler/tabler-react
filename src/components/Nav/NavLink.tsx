import React, { forwardRef } from "react";
import cn from "classnames";
import Icon from "../Icon";
import { TablerComponent } from "../../types";
import El from "../El/El";
import NavLinkTitle from "./NavLinkTitle";

export interface NavLinkProps extends TablerComponent {
  as?: React.ElementType;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  active?: boolean;
  icon?: string;
  to?: string;
  hasSubNav?: boolean;
  rootRef?: any;
  useExact?: boolean;
  title?: React.ReactNode;
  [key: string]: any;
}

function NavLink(
  {
    children,
    className,
    RootComponent,
    as = El.A,
    icon,
    active = false,
    hasSubNav,
    rootRef,
    title,
    ...props
  }: NavLinkProps,
  ref: React.Ref<any>
) {
  const classes = cn({ "nav-link": true, active: active }, className);

  const Component = RootComponent || as;

  return (
    <Component className={classes} ref={rootRef || ref} {...props}>
      {icon && (
        <React.Fragment>
          <Icon name={icon} />{" "}
        </React.Fragment>
      )}
      {title && <NavLinkTitle>{title}</NavLinkTitle>}
      {children}
    </Component>
  );
}

/** @component */
export default forwardRef(NavLink);
