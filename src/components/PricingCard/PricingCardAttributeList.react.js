// @flow
/*
Pricing Card Attribute List component
*/
// IDEA: Adding ArrayOf<String | any> instead of children

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function PricingCardAttributeList({
  className,
  children,
  transparent,
}: Props): React.Node {
  const classes = cn("list-unstyled", "leading-loose");
  return <ul className={classes}>{children}</ul>;
}

export default PricingCardAttributeList;
