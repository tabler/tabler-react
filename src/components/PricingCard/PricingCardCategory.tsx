import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function PricingCardCategory({ className, children }: Props) {
  const classes = cn("card-category", className);
  return <div className={classes}>{children}</div>;
}

PricingCardCategory.displayName = "PricingCard.Category";

export default PricingCardCategory;
