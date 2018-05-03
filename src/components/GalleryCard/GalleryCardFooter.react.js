// @flow
import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
|};

function GalleryCardFooter({ children }: Props): React.Node {
  const classes = cn("d-flex", "align-items-center", "px-2");

  return <div className={classes}>{children}</div>;
}

GalleryCardFooter.displayName = "GalleryCard.Footer";

export default GalleryCardFooter;
