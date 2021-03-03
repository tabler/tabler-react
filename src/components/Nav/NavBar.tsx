import * as React from "react";
import cn from "classnames";
import { TablerComponentPropsWithoutRef } from "../../helpers/createTablerElement";
import El from "../El/El";

export type NavBarProps<
  As extends React.ElementType = typeof El.Nav
> = TablerComponentPropsWithoutRef<
  As,
  {
    isDark?: boolean;
    isSide?: boolean;
    side?: "left" | "right";
    expand?: "xs" | "sm" | "md" | "lg" | "xl";
  }
>;

export function NavBar<As extends React.ElementType = typeof El.Nav>({
  children,
  className,
  isDark,
  isSide,
  side = "left",
  expand,
  as,
  ...rest
}: NavBarProps<As>) {
  const classes = cn(
    "navbar",
    {
      "navbar-side": isSide,
      "navbar-dark": isDark,
      "navbar-right": side === "right",
      [`navbar-expand-${expand}`]: expand,
    },
    className
  );

  const Component = as || El.Nav;
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default NavBar;
