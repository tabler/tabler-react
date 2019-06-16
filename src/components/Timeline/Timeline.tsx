import React, { HTMLProps, ReactHTMLElement } from "react";
import cn from "classnames";

import TimelineItem from "./TimelineItem";
import TimelineItemTime from "./TimelineItemTime";
import TimelineItemBadge from "./TimelineItemBadge";
import TimelineItemTitle from "./TimelineItemTitle";
import TimelineItemDescription from "./TimelineItemDescription";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLUListElement> {}

function Timeline({ className, children, ...rest }: TimelineProps) {
  const classes = cn(
    {
      timeline: true,
    },
    className
  );
  return (
    <El.Ul className={classes} {...rest}>
      {children}
    </El.Ul>
  );
}

Timeline.Item = TimelineItem;
Timeline.ItemTime = TimelineItemTime;
Timeline.ItemBadge = TimelineItemBadge;
Timeline.ItemTitle = TimelineItemTitle;
Timeline.ItemDescription = TimelineItemDescription;

export default Timeline;
