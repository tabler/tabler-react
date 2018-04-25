import * as React from 'react';

import PricingCardCategory from './PricingCardCategory';
import PricingCardPrice from './PricingCardPrice';
import PricingCardAttributeList from './PricingCardAttributeList';
import PricingCardAttributeItem from './PricingCardAttributeItem';
import PricingCardButton from './PricingCardButton';

declare namespace PricingCard {
    interface IPricingCardProps<T> extends React.HTMLProps<T> {
      active?: boolean;
      category?: React.ReactNode;
    }
    type Props = IPricingCardProps<HTMLElement>; // TODO: not sure if `Card`
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Category: PricingCardCategory.Component;
      CategoryProps: PricingCardCategory.Props;
      Price: PricingCardPrice.Component;
      PriceProps: PricingCardPrice.Props;
      AttributeList: PricingCardAttributeList.Component;
      AttributeListProps: PricingCardAttributeList.Props;
      AttributeItem: PricingCardAttributeItem.Component;
      AttributeItemProps: PricingCardAttributeItem.Props;
      Button: PricingCardButton.Component;
      ButtonProps: PricingCardButton.Props;
    }
}
declare const PricingCard: PricingCard.Component & PricingCard.NestedComponents;
export = PricingCard;
