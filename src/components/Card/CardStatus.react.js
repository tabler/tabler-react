// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color: string,
|};

function CardStatus({ className, children, color }: Props): React.Node {
  const classes = cn({ "card-status": true, [`bg-${color}`]: true }, className);
  return <div className={classes}>{children}</div>;
}

CardStatus.displayName = "Card.Status";

export default CardStatus;
