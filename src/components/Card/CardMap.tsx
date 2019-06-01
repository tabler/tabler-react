import * as React from "react";
import cn from "classnames";

interface Props {
  children?: React.ReactNode;
  className?: string;
  placeholder?: string;
}

function CardMap({ className, children, placeholder }: Props) {
  const classes = cn(
    "card-map",
    { "card-map-placeholder": placeholder },
    className
  );
  return (
    <div
      className={classes}
      style={placeholder && { backgroundImage: `url(${placeholder})` }}
    >
      {children}
    </div>
  );
}

CardMap.displayName = "Card.Map";

export default CardMap;
