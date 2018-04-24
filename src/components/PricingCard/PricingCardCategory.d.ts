import * as React from 'react';

declare namespace PricingCardCategory {
    export interface PricingCardCategoryProps extends React.Props<PricingCardCategory> {
      className?: string;
    }
}
declare class PricingCardCategory extends React.Component<PricingCardCategory.PricingCardCategoryProps> { }
export = PricingCardCategory;
