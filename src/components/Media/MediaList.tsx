import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function MediaList({ className, children }: Props) {
  const classes = cn("media-list", className);
  return <ul className={classes}>{children}</ul>;
}

export default MediaList;
