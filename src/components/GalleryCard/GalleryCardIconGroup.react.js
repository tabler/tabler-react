// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function GalleryCardIconGroup({ children, className }: Props): React.Node {
  const classes = cn("ml-auto", "text-muted", className);

  return <div className={classes}>{children}</div>;
}

GalleryCardIconGroup.displayName = "GalleryCard.IconGroup";

export default GalleryCardIconGroup;
