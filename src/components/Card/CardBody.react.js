// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CardBody({ className, children }: Props): React.Node {
  const classes = cn("card-body", className);
  return <div className={classes}>{children}</div>;
}

CardBody.displayName = "Card.Body";

export default CardBody;
