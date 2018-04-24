import * as React from 'react';

declare namespace PricingCardAttributeItem {
    export interface PricingCardAttributeItemProps extends React.Props<PricingCardAttributeItem> {
      available?: boolean;
      hasIcon?: boolean;
    }
}
declare class PricingCardAttributeItem extends React.Component<PricingCardAttributeItem.PricingCardAttributeItemProps> { }
export = PricingCardAttributeItem;
