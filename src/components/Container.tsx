import * as React from "react";
import cn from "classnames";

import "./Container.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function Container({ className, children }: Props) {
  const classes = cn("container", className);
  return <div className={classes}>{children}</div>;
}

export default Container;
