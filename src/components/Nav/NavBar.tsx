import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface NavBarProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {
  isDark?: boolean;
  isSide?: boolean;
  expand?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function NavBar({
  children,
  className,
  isDark,
  isSide,
  expand,
  ...rest
}: NavBarProps) {
  const classes = cn(
    "navbar",
    {
      "navbar-side": isSide,
      "navbar-dark": isDark,
      [`navbar-expand-${expand}`]: expand,
    },
    className
  );
  return (
    <El.Nav className={classes} {...rest}>
      {children}
    </El.Nav>
  );
}

export default NavBar;
