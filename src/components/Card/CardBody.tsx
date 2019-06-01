import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function CardBody({ className, children }: Props) {
  const classes = cn("card-body", className);
  return <div className={classes}>{children}</div>;
}

CardBody.displayName = "Card.Body";

export default CardBody;
