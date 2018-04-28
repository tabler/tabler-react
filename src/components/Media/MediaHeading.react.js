// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function MediaHeading({ className, children }: Props): React.Node {
  const classes = cn("media-heading", className);
  return <div className={classes}>{children}</div>;
}

export default MediaHeading;
