import * as React from "react";
import cn from "classnames";
import ProgressBar from "./ProgressBar";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: string;
};

function Progress({ className, children, size = "" }: Props) {
  const classes = cn(`progress`, { [`progress-${size}`]: !!size }, className);
  return <div className={classes}>{children}</div>;
}

Progress.Bar = ProgressBar;

export default Progress;
