// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value?: string,
|};

function Badge({ className, children, value }: Props): React.Node {
  const classes = cn(
    {
      badge: true,
      "badge-primary": true,
    },
    className
  );
  return <span className={classes}>{value || children}</span>;
}

export default Badge;
