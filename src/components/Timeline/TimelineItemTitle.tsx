import * as React from "react";

type Props = {
  children?: React.ReactNode;
  active?: boolean;
};

function TimelineItemTitle({ children, active }: Props): any {
  if (children) {
    return active ? <strong>{children}</strong> : children;
  } else {
    return null;
  }
}

TimelineItemTitle.displayName = "Timeline.ItemTitle";

export default TimelineItemTitle;
