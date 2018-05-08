// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color?: string,
|};

/**
 * A small colored rectangle with rounded corners.
 */
function Badge({ className, children, color = "primary" }: Props): React.Node {
  const classes = cn(
    {
      badge: true,
      [`badge-${color}`]: color,
    },
    className
  );
  return <span className={classes}>{children}</span>;
}

export default Badge;
