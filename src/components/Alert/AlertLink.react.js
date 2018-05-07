// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +href?: string,
|};

/**
 * Renders a link that stands out more within Alerts
 */
function AlertLink({ children, className, href }: Props): React.Node {
  const classes = cn(`alert-link`, className);
  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}

AlertLink.displayName = "Alert.Link";

export default AlertLink;
