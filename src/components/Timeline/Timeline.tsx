import React from "react";
import cn from "classnames";

import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

export interface TimelineProps extends TablerComponentProps<"ul"> {
  simple?: boolean;
}

function Timeline({ className, children, simple, ...rest }: TimelineProps) {
  const classes = cn(
    "list-timeline",
    { "list-timeline-simple": simple },
    className
  );
  return (
    <El.Ul className={classes} {...rest}>
      {children}
    </El.Ul>
  );
}

export default Timeline;
