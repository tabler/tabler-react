import * as React from "react";
import cn from "classnames";
import { TablerComponent } from "../../types";

interface Props extends TablerComponent {}

function PricingCardCategory({ className, children }: Props) {
  const classes = cn("card-category", className);
  return <div className={classes}>{children}</div>;
}

export default PricingCardCategory;
