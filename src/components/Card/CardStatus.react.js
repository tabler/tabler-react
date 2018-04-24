// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color: string,
  +side?: boolean,
|};

function CardStatus({ className, children, color, side }: Props): React.Node {
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

CardStatus.displayName = "Card.Status";

export default CardStatus;
