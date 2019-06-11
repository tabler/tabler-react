import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function FormImageCheck({ className, children }: Props) {
  const classes = cn("gutters-sm", className);
  return <Grid.Row className={classes}>{children}</Grid.Row>;
}

export default FormImageCheck;
