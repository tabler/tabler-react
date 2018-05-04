// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function TimelineTime({ className, children }: Props): React.Node {
  const classes = cn(
    {
      "timeline-time": true,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default TimelineTime;
