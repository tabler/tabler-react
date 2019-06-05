import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Media({ className, children }: Props) {
  const classes = cn("media", className);
  return <div className={classes}>{children}</div>;
}

export default Media;
