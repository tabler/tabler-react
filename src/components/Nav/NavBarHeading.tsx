import * as React from "react";
import cn from "classnames";
import H6, { H6Props } from "../Header/H6";

export interface NavBarHeadingProps extends H6Props {}

export function NavBarHeading({
  children,
  className,

  ...rest
}: NavBarHeadingProps) {
  const classes = cn("navbar-heading", {}, className);
  return (
    <H6 className={classes} {...rest}>
      {children}
    </H6>
  );
}

export default NavBarHeading;
