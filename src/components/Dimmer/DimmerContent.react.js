// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function DimmerContent({ className, children }: Props): React.Node {
  const classes = cn({ "dimmer-content": true }, className);
  return <div className={classes}>{children}</div>;
}

DimmerContent.displayName = "Dimmer.Content";

export default DimmerContent;
