import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
};

function TimelineItemTime({ className, children, active }: Props) {
  const classes = cn(
    {
      "timeline-time": true,
      "text-muted-black": active,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}



export default TimelineItemTime;
