import * as React from 'react';

declare namespace PricingCard {
    export interface IPricingCardProps<T> extends React.HTMLProps<T> {
      className?: string;
      active?: boolean;
      category?: React.ReactNode;
    }
    export type PricingCardProps = IPricingCardProps<HTMLDivElement>;
}
declare class PricingCard extends React.Component<PricingCard.PricingCardProps> { }
export = PricingCard;
