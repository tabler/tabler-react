// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color?: string,
|};

function TimelineItemBadge({
  className,
  children,
  color = "",
}: Props): React.Node {
  const classes = cn(
    {
      "timeline-badge": true,
      [`bg-${color}`]: color,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

TimelineItemBadge.displayName = "Timeline.ItemBadge";

export default TimelineItemBadge;
