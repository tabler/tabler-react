// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

function TimelineItemDescription({ children }: Props): React.Node {
  return <small className="d-block text-muted">{children}</small>;
}

TimelineItemDescription.displayName = "Timeline.ItemDescription";

export default TimelineItemDescription;
