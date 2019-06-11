// @flow

import * as React from "react";
import cn from "classnames";

import TimelineItemBadge from "./TimelineItemBadge";
import TimelineItemTime from "./TimelineItemTime";
import TimelineItemTitle from "./TimelineItemTitle";
import TimelineItemDescription from "./TimelineItemDescription";

type Props = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  badge?: boolean;
  badgeColor?: string;
  time?: string;
  active?: boolean;
};

function TimelineItem({
  className,
  children,
  title: titleFromProps,
  description,
  badge,
  badgeColor,
  time,
  active,
}: Props) {
  const classes = cn(
    {
      "timeline-item": true,
    },
    className
  );

  const titleString =
    titleFromProps || (typeof children === "string" && children);

  const title = titleString && (
    <TimelineItemTitle active={active}>{titleString}</TimelineItemTitle>
  );

  const titleAndDescription = title && (
    <React.Fragment>
      {title}
      {description && (
        <TimelineItemDescription>{description}</TimelineItemDescription>
      )}
    </React.Fragment>
  );

  return (
    <li className={classes}>
      {(badge || badgeColor) && <TimelineItemBadge color={badgeColor} />}
      {active ? <div>{titleAndDescription}</div> : titleAndDescription}
      {children}
      {time && <TimelineItemTime active={active}>{time}</TimelineItemTime>}
    </li>
  );
}



export default TimelineItem;
