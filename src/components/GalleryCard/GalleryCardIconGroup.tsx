import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function GalleryCardIconGroup({ children, className }: Props) {
  const classes = cn("ml-auto", "text-muted", className);

  return <div className={classes}>{children}</div>;
}



export default GalleryCardIconGroup;
