// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string
|};

function Badge({ className, children }: Props): React.Node {
  const classes = cn(
    {
      badge: true,
      "badge-primary": true
    },
    className
  );
  return <span className={classes}>{children}</span>;
}

export default Badge;
