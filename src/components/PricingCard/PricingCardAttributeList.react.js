// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function PricingCardAttributeList({ className, children }: Props): React.Node {
  const classes = cn("list-unstyled", "leading-loose", className);
  return <ul className={classes}>{children}</ul>;
}

PricingCardAttributeList.displayName = "PricingCard.AttributeList";

export default PricingCardAttributeList;
