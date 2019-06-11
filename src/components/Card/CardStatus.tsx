import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  color: string;
  side?: boolean;
}

function CardStatus({ className, children, color, side }: Props) {
  const classes = cn(
    {
      "card-status": true,
      [`bg-${color}`]: true,
      [`card-status-left`]: side,
    },
    className
  );
  return <div className={classes}>{children}</div>;
}

export default CardStatus;
