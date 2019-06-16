import * as React from "react";
import cn from "classnames";
import ProgressBar from "./ProgressBar";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface ProgressProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLDivElement>, "size"> {
  size?: string;
}

function Progress({ className, children, size = "", ...rest }: ProgressProps) {
  const classes = cn(`progress`, { [`progress-${size}`]: !!size }, className);
  return (
    <El.Div className={classes} {...rest}>
      {children}
    </El.Div>
  );
}

Progress.Bar = ProgressBar;

export default Progress;
