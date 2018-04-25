// @flow
// GallerdCardFooter Component
import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +children?: React.Node,
|};

function GalleryCardFooter({ className, children }: Props) {
  const classes = cn("d-flex", "align-items-center", "px-2");

  return <div className={classes}>{children}</div>;
}

export default GalleryCardFooter;
