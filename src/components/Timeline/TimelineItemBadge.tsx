import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemBadgeProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  color?: colors;
}

function TimelineItemBadge({
  className,
  children,
  color,
  ...rest
}: TimelineItemBadgeProps) {
  const classes = cn(
    {
      "list-timeline-badge": true,
      [`bg-${color}`]: color,
    },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

export default TimelineItemBadge;
