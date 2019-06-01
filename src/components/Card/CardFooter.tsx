import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CardFooter({ className, children }: Props) {
  const classes = cn("card-footer", className);
  return <div className={classes}>{children}</div>;
}

CardFooter.displayName = "Card.Footer";

export default CardFooter;
