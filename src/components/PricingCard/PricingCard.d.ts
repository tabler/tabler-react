import * as React from 'react';

declare namespace PricingCard {
    export interface PricingCardProps extends React.Props<PricingCard> {
      className?: string;
      active?: boolean;
      category?: React.ReactNode;
    }
}
declare class PricingCard extends React.Component<PricingCard.PricingCardProps> { }
export = PricingCard;
