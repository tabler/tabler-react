import * as React from "react";
import cn from "classnames";
import { TablerComponentProps } from "../../helpers/createTablerElement";

interface Props extends TablerComponentProps {}

function PricingCardCategory({ className, children }: Props) {
  const classes = cn("card-category", className);
  return <div className={classes}>{children}</div>;
}

export default PricingCardCategory;
