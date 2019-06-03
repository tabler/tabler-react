import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function MediaHeading({ className, children }: Props) {
  const classes = cn("media-heading", className);
  return <div className={classes}>{children}</div>;
}

export default MediaHeading;
