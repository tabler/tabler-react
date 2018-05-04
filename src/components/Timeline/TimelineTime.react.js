// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +active?: boolean,
|};

function TimelineTime({ className, children, active }: Props): React.Node {
  const classes = cn(
    {
      "timeline-time": true,
      "text-muted-black": active,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default TimelineTime;
