import React from "react";
import cn from "classnames";
import { HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface NavSubNavProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLElement> {
  as?: React.ElementType;
  collapsed?: boolean;
  show?: boolean;
}

function NavSubNav({
  as: Component = El.Div,
  className,
  children,
  collapsed = true,
  show = false,
  ...rest
}: NavSubNavProps) {
  const classes = cn(
    { "navbar-subnav": true, collapse: true, collapsed, show },
    className
  );
  return (
    <Component className={classes} {...rest}>
      <ul className="nav">{children}</ul>
    </Component>
  );
}

export default NavSubNav;
