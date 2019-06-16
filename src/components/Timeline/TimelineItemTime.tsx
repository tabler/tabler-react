import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemTimeProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  active?: boolean;
}

const TimelineItemTime = ({
  className,
  children,
  active,
  ...rest
}: TimelineItemTimeProps) => {
  const classes = cn(
    {
      "timeline-time": true,
      "text-muted-black": active,
    },
    className
  );
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
};

export default TimelineItemTime;
