import * as React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemDescriptionProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

const TimelineItemDescription = React.forwardRef(
  function TimelineItemDescription(
    { children, ...rest }: TimelineItemDescriptionProps,
    ref
  ) {
    return (
      <El.Small classNames="d-block text-muted" ref={ref} {...rest}>
        {children}
      </El.Small>
    );
  }
);

export default TimelineItemDescription;
