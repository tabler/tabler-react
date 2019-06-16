import * as React from "react";
import cn from "classnames";
import { TablerComponent, HTMLPropsWithoutRef } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface AlertLinkProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLAnchorElement> {}

/**
 * Renders an anchor that stands out more within Alerts
 */
export function AlertLink({ children, className, ...rest }: AlertLinkProps) {
  const classes = cn(`alert-link`, className);
  return (
    <El.A className={classes} {...rest}>
      {children}
    </El.A>
  );
}

export default AlertLink;
