import * as React from 'react';

declare namespace PricingCardButton {
    interface IPricingCardButtonProps<T> extends React.HTMLProps<T> {
      active?: boolean;
      RootComponent?: React.ReactType;
    }
    type Props = IPricingCardButtonProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PricingCardButton: PricingCardButton.Component;
export = PricingCardButton;
