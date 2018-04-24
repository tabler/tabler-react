import * as React from 'react';

declare namespace PricingCardAttributeItem {
    export interface IPricingCardAttributeItemProps<T> extends React.HTMLProps<T> {
      available?: boolean;
      hasIcon?: boolean;
    }
    export type PricingCardAttributeItemProps = IPricingCardAttributeItemProps<HTMLDivElement>;
}
declare class PricingCardAttributeItem extends React.Component<PricingCardAttributeItem.PricingCardAttributeItemProps> { }
export = PricingCardAttributeItem;
