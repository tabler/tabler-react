import * as React from 'react';

declare namespace PricingCardPrice {
    interface IPricingCardPriceProps<T> extends React.HTMLProps<T> {

    }
    type Props = IPricingCardPriceProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PricingCardPrice: PricingCardPrice.Component;
export = PricingCardPrice;
