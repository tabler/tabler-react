import * as React from "react";
import cn from "classnames";

import TimelineItem from "./TimelineItem";
import TimelineItemTime from "./TimelineItemTime";
import TimelineItemBadge from "./TimelineItemBadge";
import TimelineItemTitle from "./TimelineItemTitle";
import TimelineItemDescription from "./TimelineItemDescription";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Timeline({ className, children }: Props) {
  const classes = cn(
    {
      timeline: true,
    },
    className
  );
  return <ul className={classes}>{children}</ul>;
}

Timeline.Item = TimelineItem;
Timeline.ItemTime = TimelineItemTime;
Timeline.ItemBadge = TimelineItemBadge;
Timeline.ItemTitle = TimelineItemTitle;
Timeline.ItemDescription = TimelineItemDescription;

export default Timeline;
