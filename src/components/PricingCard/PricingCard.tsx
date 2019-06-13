import * as React from "react";
import cn from "classnames";
import Card from "../Card/Card";

import PricingCardCategory from "./PricingCardCategory";
import PricingCardPrice from "./PricingCardPrice";
import PricingCardAttributeList from "./PricingCardAttributeList";
import PricingCardAttributeItem from "./PricingCardAttributeItem";
import PricingCardButton from "./PricingCardButton";
import { TablerComponent } from "../../types";

interface Props extends TablerComponent {
  active?: boolean;
  category?: React.ReactNode;
}

function PricingCard({ className, children, active = false, category }: Props) {
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
