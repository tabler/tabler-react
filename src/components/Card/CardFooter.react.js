// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CardFooter({ className, children }: Props): React.Node {
  const classes = cn("card-footer", className);
  return <div className={classes}>{children}</div>;
}

CardFooter.displayName = "Card.Footer";

export default CardFooter;
