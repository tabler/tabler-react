import * as React from 'react';

declare namespace PricingCardAttributeList {
    interface IPricingCardAttributeListProps<T> extends React.HTMLProps<T> {
    }
    type Props = IPricingCardAttributeListProps<HTMLUListElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PricingCardAttributeList: PricingCardAttributeList.Component;
export = PricingCardAttributeList;
