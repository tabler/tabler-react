import * as React from 'react';

declare namespace PricingCardCategory {
    interface IPricingCardCategoryProps<T> extends React.HTMLProps<T> {

    }
    type Props = IPricingCardCategoryProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PricingCardCategory: PricingCardCategory.Component;
export = PricingCardCategory;
