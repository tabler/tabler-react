import * as React from 'react';

declare namespace PricingCardAttributeItem {
    interface IPricingCardAttributeItemProps<T> extends React.HTMLProps<T> {
      available?: boolean;
      hasIcon?: boolean;
    }
    type Props = IPricingCardAttributeItemProps<HTMLLIElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PricingCardAttributeItem: PricingCardAttributeItem.Component;
export = PricingCardAttributeItem;
