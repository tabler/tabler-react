import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function MediaListItem({ className, children }: Props) {
  const classes = cn("media mt-4", className);
  return <li className={classes}>{children}</li>;
}

export default MediaListItem;
