import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function MediaBody({ className, children }: Props) {
  const classes = cn("media-body", className);

  return <div className={classes}>{children}</div>;
}

export default MediaBody;
