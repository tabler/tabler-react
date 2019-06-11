import * as React from "react";
import cn from "classnames";

interface Props {
  children?: any;
  className?: string;
  color: string;
}

function CardAlert({ className, children, color }: Props) {
  const classes = cn(`card-alert alert alert-${color} mb-0`, className);
  return <div className={classes}>{children}</div>;
}



export default CardAlert;
