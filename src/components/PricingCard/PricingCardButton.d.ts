import * as React from 'react';

declare namespace PricingCardButton {
    export interface PricingCardButtonProps extends React.Props<PricingCardButton> {
      className?: string;
      active?: boolean;
      RootComponent?: React.ReactElement<any>;
    }
}
declare class PricingCardButton extends React.Component<PricingCardButton.PricingCardButtonProps> { }
export = PricingCardButton;
