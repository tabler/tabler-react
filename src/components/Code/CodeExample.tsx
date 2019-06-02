import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CodeExample({ className, children }: Props) {
  const classes = cn(`example`, className);
  return <div className={classes}>{children}</div>;
}

export default CodeExample;
