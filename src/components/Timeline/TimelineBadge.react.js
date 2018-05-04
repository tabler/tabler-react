// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color?: string,
|};

function TimelineBadge({ className, children, color = "" }: Props): React.Node {
  const classes = cn(
    {
      "timeline-badge": true,
      [`bg-${color}`]: color,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default TimelineBadge;
