// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
  +active?: boolean,
|};

function TimelineItemTitle({ children, active }: Props): React.Node {
  if (children) {
    return active ? <strong>{children}</strong> : children;
  } else {
    return null;
  }
}

TimelineItemTitle.displayName = "Timeline.ItemTitle";

export default TimelineItemTitle;
