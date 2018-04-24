import * as React from 'react';

declare namespace PricingCardCategory {
    export interface IPricingCardCategoryProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type PricingCardCategoryProps = IPricingCardCategoryProps<HTMLDivElement>;
}
declare class PricingCardCategory extends React.Component<PricingCardCategory.PricingCardCategoryProps> { }
export = PricingCardCategory;
