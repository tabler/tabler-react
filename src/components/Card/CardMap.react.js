// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +placeholder?: string,
|};

function CardMap({ className, children, placeholder }: Props): React.Node {
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
