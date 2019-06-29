import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";
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
