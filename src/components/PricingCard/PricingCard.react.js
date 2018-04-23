//@flow

import * as React from "react";
import cn from "classnames";
import Card from "../Card/Card.react";

import PricingCardCategory from "./PricingCardCategory.react";
import PricingCardPrice from "./PricingCardPrice.react";
import PricingCardAttributeList from "./PricingCardAttributeList.react";
import PricingCardAttributeItem from "./PricingCardAttributeItem.react";
import PricingCardButton from "./PricingCardButton.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +active?: boolean,
  +category?: React.Node,
|};

function PricingCard({
  className,
  children,
  active = false,
  category,
}: Props): React.Node {
  const cardBodyClassName = cn("text-center");
  const cardStatusClassName = cn("card-status", "bg-green");
  const cardStatus = <div className={cardStatusClassName} />;
  const cardCategory = <PricingCardCategory>{category}</PricingCardCategory>;
  // TODO: Add component logic.
  return (
    <Card>
      {active && cardStatus}
      <Card.Body className={cardBodyClassName}>
        {category && cardCategory}
        {children}
      </Card.Body>
    </Card>
  );
}

PricingCard.Category = PricingCardCategory;
PricingCard.Price = PricingCardPrice;
PricingCard.AttributeList = PricingCardAttributeList;
PricingCard.AttributeItem = PricingCardAttributeItem;
PricingCard.Button = PricingCardButton;

export default PricingCard;
