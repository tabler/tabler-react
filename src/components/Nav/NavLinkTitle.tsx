import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export type NavLinkTitleProps = TablerComponentProps<"span">;

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
