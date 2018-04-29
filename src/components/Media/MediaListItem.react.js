// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function MediaListItem({ className, children }: Props): React.Node {
  const classes = cn("media mt-4", className);
  return <li className={classes}>{children}</li>;
}

export default MediaListItem;
