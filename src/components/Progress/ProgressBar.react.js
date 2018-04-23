// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +color?: string,
  +width?: number,
|};

function ProgressBar({ className, color = "", width = 0 }: Props): React.Node {
  const classes = cn(`progress-bar`, { [`bg-${color}`]: !!color }, className);
  return <div className={classes} style={{ width: `${width}%` }} />;
}

ProgressBar.displayName = "Progress.Bar";

export default ProgressBar;
