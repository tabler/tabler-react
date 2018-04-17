// @flow

import * as React from "react";
import cn from "classnames";
import ProgressBar from "./ProgressBar.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +size?: string,
|};

function Progress({ className, children, size = "" }: Props): React.Node {
  const classes = cn(`progress`, { [`progress-${size}`]: !!size }, className);
  return <div className={classes}>{children}</div>;
}

Progress.Bar = ProgressBar;

export default Progress;
