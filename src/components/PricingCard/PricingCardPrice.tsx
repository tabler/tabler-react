import * as React from "react";
import cn from "classnames";
// TODO:Add size options
type Props = {
  children?: React.ReactNode;
  className?: string;
};

function PricingCardPrice({ className, children }: Props) {
  const classes = cn("display-3 my-4", className);
  return <div className={classes}>{children}</div>;
}

PricingCardPrice.displayName = "PricingCard.Price";

export default PricingCardPrice;
