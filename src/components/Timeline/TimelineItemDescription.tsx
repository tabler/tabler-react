import * as React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface TimelineItemDescriptionProps extends ELProps<HTMLDivElement> {}

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

export default TimelineItemDescription;
