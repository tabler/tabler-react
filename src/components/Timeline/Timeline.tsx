import React, { HTMLProps, ReactHTMLElement } from "react";
import cn from "classnames";

import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLUListElement> {
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
