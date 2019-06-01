import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CardOptions({ className, children }: Props) {
  const classes = cn("card-options", className);
  return <div className={classes}>{children}</div>;
}

CardOptions.displayName = "Card.Options";

export default CardOptions;
