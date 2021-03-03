import * as React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemDescriptionProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLParagraphElement> {}

const TimelineItemDescription = React.forwardRef<any, any>(
  function TimelineItemDescription(
    { children, ...rest }: TimelineItemDescriptionProps,
    ref
  ) {
    return (
      <El.P classNames="text-muted" ref={ref} {...rest}>
        {children}
      </El.P>
    );
  }
);

export default TimelineItemDescription;
