import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";

interface Props extends TablerComponent {
  href?: string;
}

/**
 * Renders a link that stands out more within Alerts
 */
function AlertLink({ children, className, href }: Props) {
  const classes = cn(`alert-link`, className);
  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
 

export default AlertLink;
