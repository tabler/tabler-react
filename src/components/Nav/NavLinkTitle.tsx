import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface NavLinkTitleProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "as"> {}

export function NavLinkTitle({
  children,
  className,

  ...rest
}: NavLinkTitleProps) {
  const classes = cn("nav-link-title", className);
  return (
    <El.Span className={classes} {...rest}>
      {children}
    </El.Span>
  );
}

export default NavLinkTitle;
