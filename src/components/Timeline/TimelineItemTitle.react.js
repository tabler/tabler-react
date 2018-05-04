// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
  +active?: boolean,
|};

function TimelineItemTitle({ children, active }: Props): React.Node {
  return active ? <strong>{children}</strong> : children;
}

TimelineItemTitle.displayName = "Timeline.ItemTitle";

export default TimelineItemTitle;
