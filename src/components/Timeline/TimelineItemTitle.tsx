import * as React from "react";

export interface TimelineItemTitleProps {
  children?: React.ReactNode;
  active?: boolean;
}

function TimelineItemTitle({ children, active }: TimelineItemTitleProps) {
  return (
    <React.Fragment>
      {active ? <strong>{children}</strong> : children}
    </React.Fragment>
  );
}

export default TimelineItemTitle;
