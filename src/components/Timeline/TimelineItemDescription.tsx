import * as React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TimelineItemDescriptionProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

const TimelineItemDescription = React.forwardRef(
  function TimelineItemDescription({
    children,
    ...rest
  }: TimelineItemDescriptionProps) {
    return (
      <El.Small classNames="d-block text-muted" {...rest}>
        {children}
      </El.Small>
    );
  }
);

export default TimelineItemDescription;
