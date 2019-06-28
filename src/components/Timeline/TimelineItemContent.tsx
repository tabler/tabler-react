import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El";

export interface TimelineItemContentProps extends ELProps {
  children?: React.ReactNode;
}

function TimelineItemContent({
  children,
  className,
  ...rest
}: TimelineItemContentProps) {
  const _className = cn("list-timeline-content", {}, className);
  return (
    <El.Div className={_className} {...rest}>
      {children}
    </El.Div>
  );
}

export default TimelineItemContent;
