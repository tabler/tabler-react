import * as React from "react";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemDescriptionProps
  extends TablerComponentProps,
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
