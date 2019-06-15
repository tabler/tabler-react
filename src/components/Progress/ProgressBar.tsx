import * as React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";

export interface ProgressBarProps extends ELProps<HTMLDivElement> {
  color?: colors;
  width?: number;
}

function ProgressBar({
  className,
  color,
  width = 0,
  style,
  ...rest
}: ProgressBarProps) {
  const classes = cn(`progress-bar`, { [`bg-${color}`]: !!color }, className);
  return (
    <El.Div
      className={classes}
      style={{ width: `${width}%`, ...style }}
      {...rest}
    />
  );
}

export default ProgressBar;
