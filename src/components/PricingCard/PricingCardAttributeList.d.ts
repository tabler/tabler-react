import * as React from 'react';

declare namespace PricingCardAttributeList {
    export interface IPricingCardAttributeListProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type PricingCardAttributeListProps = IPricingCardAttributeListProps<HTMLDivElement>;
}
declare class PricingCardAttributeList extends React.Component<PricingCardAttributeList.PricingCardAttributeListProps> { }
export = PricingCardAttributeList;
