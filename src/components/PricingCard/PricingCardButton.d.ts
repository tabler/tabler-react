import * as React from 'react';

declare namespace PricingCardButton {
    export interface IPricingCardButtonProps<T> extends React.HTMLProps<T> {
      className?: string;
      active?: boolean;
      RootComponent?: React.ReactElement<any>;
    }
    export type PricingCardButtonProps = IPricingCardButtonProps<HTMLDivElement>;
}
declare class PricingCardButton extends React.Component<PricingCardButton.PricingCardButtonProps> { }
export = PricingCardButton;
