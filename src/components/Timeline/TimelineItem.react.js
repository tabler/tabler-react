// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function TimelineItem({ className, children }: Props): React.Node {
  const classes = cn(
    {
      "timeline-item": true,
    },
    className
  );
  return <li className={classes}>{children}</li>;
}

export default TimelineItem;
