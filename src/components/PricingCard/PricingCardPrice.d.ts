import * as React from 'react';

declare namespace PricingCardPrice {
    export interface IPricingCardPriceProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type PricingCardPriceProps = IPricingCardPriceProps<HTMLDivElement>;
}
declare class PricingCardPrice extends React.Component<PricingCardPrice.PricingCardPriceProps> { }
export = PricingCardPrice;
