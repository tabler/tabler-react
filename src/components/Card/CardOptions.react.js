// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function CardOptions({ className, children }: Props): React.Node {
  const classes = cn("card-options", className);
  return <div className={classes}>{children}</div>;
}

CardOptions.displayName = "Card.Options";

export default CardOptions;
