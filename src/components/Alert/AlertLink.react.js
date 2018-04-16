// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string
|};

function AlertLink({ children, className, ...props }: Props): React.Node {
  const classes = cn(`alert-link`, className);
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

export default AlertLink;
