import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
}

function GalleryCardFooter({ children }: Props) {
  const classes = cn("d-flex", "align-items-center", "px-2");

  return <div className={classes}>{children}</div>;
}

GalleryCardFooter.displayName = "GalleryCard.Footer";

export default GalleryCardFooter;
