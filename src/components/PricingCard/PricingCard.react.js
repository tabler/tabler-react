//@flow

import * as React from "react";

import PricingCardCategory from "./PricingCardCategory.react";
import PricingCardPrice from "./PricingCardPrice.react";
import PricingCardAttributeList from "./PricingCardAttributeList.react";
import PricingCardAttributeItem from "./PricingCardAttributeItem.react";
import PricingCardButton from "./PricingCardButton.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +active?: boolean,
  +title?: string | React.Node,
  +body?: React.Node,
|};

function PricingCard({
  className,
  children,
  active = false,
  title,
  body,
}: Props): React.Node {
  // TODO: Add component logic.
  return { children };
}

PricingCard.Category = PricingCardCategory;
PricingCard.Price = PricingCardPrice;
PricingCard.AttributeList = PricingCardAttributeList;
PricingCard.AttributeItem = PricingCardAttributeItem;
PricingCard.Button = PricingCardButton;

export default PricingCard;
