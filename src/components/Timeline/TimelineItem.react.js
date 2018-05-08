// @flow

import * as React from "react";
import cn from "classnames";

import TimelineItemBadge from "./TimelineItemBadge.react";
import TimelineItemTime from "./TimelineItemTime.react";
import TimelineItemTitle from "./TimelineItemTitle.react";
import TimelineItemDescription from "./TimelineItemDescription.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +description?: string,
  +badge?: boolean,
  +badgeColor?: string,
  +time?: string,
  +active?: boolean,
|};

function TimelineItem({
  className,
  children,
  title: titleFromProps,
  description,
  badge,
  badgeColor,
  time,
  active,
}: Props): React.Node {
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

TimelineItem.displayName = "Timeline.Item";

export default TimelineItem;
