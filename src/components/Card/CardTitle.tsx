import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  RootComponent?: React.ElementType;
}

function CardTitle({ className, children, RootComponent }: Props) {
  const classes = cn("card-title", className);
  const Component = RootComponent || "h3";
  return <Component className={classes}>{children}</Component>;
}



export default CardTitle;
