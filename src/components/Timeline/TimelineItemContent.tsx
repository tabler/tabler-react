import React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El";

export interface TimelineItemContentProps extends TablerComponentProps {
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
