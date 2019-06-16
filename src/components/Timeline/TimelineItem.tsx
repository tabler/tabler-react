import React, { HTMLProps, ReactHTMLElement } from "react";
import cn from "classnames";

import TimelineItemBadge from "./TimelineItemBadge";
import TimelineItemTime from "./TimelineItemTime";
import TimelineItemTitle from "./TimelineItemTitle";
import TimelineItemDescription from "./TimelineItemDescription";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { colors } from "../../colors";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLLIElement> {
  title?: string;
  description?: string;
  badge?: boolean;
  badgeColor?: colors;
  time?: string;
  active?: boolean;
}

function TimelineItem({
  className,
  children,
  title: titleFromProps,
  description,
  badge,
  badgeColor,
  time,
  active,
  ...rest
}: TimelineItemProps) {
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
    <El.Li className={classes} {...rest}>
      {(badge || badgeColor) && <TimelineItemBadge color={badgeColor} />}
      {active ? <div>{titleAndDescription}</div> : titleAndDescription}
      {children}
      {time && <TimelineItemTime active={active}>{time}</TimelineItemTime>}
    </El.Li>
  );
}

export default TimelineItem;
