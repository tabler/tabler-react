import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CodeHighlight({ className, children }: Props) {
  const classes = cn(`highlight`, className);
  return <div className={classes}>{children}</div>;
}

export default CodeHighlight;
