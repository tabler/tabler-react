import * as React from "react";
import cn from "classnames";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface AlertLinkProps extends TablerComponentProps<"a"> {}

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
