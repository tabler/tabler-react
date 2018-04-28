// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color: string,
|};

function CardAlert({ className, children, color }: Props): React.Node {
  const classes = cn(`card-alert alert alert-${color} mb-0`, className);
  return <div className={classes}>{children}</div>;
}

CardAlert.displayName = "Card.Alert";

export default CardAlert;
