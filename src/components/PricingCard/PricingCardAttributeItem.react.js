// @flow

import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";
// TODO: Add RootComponent prop
type Props = {|
  +children?: React.Node,
  +className?: string,
  +included?: boolean,
  // FIXME: I'm not sure this prop is suitable for this case, It might be better .
  +optional?: boolean,
|};

function PricingCardAttributeItem({
  className,
  children,
  included,
  optional,
}: Props): React.Node {
  const iconClasses = included
    ? cn("text-success", "mr-2")
    : cn("text-danger", "mr-2");

  return optional ? (
    <li>
      {" "}
      <Icon
        prefix="fe"
        name={included ? "check" : "x"}
        className={iconClasses}
        isAriaHidden
      />
      {children}
    </li>
  ) : (
    <li> {children} </li>
  );
}

export default PricingCardAttributeItem;
