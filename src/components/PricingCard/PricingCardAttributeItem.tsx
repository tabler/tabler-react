import * as React from "react";
import cn from "classnames";

import Icon from "../Icon";
// TODO: Add RootComponent prop
type Props = {
  children?: React.ReactNode;
  available?: boolean;
  hasIcon?: boolean;
};

function PricingCardAttributeItem({ children, available, hasIcon }: Props) {
  const iconClasses = available
    ? cn("text-success", "mr-2")
    : cn("text-danger", "mr-2");

  return hasIcon ? (
    <li>
      {" "}
      <Icon
        prefix="fe"
        name={available ? "check" : "x"}
        className={iconClasses}
        isAriaHidden
      />
      {children}
    </li>
  ) : (
    <li> {children} </li>
  );
}



/** @component */
export default PricingCardAttributeItem;
