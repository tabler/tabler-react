// @flow

import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: string;
};

function TimelineItemBadge({ className, children, color = "" }: Props) {
  const classes = cn(
    {
      "timeline-badge": true,
      [`bg-${color}`]: color,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}



export default TimelineItemBadge;
