import * as React from 'react';

declare namespace CardHeader {
    export interface ICardHeaderProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type CardHeaderProps = ICardHeaderProps<HTMLDivElement>;
}
declare class CardHeader extends React.Component<CardHeader.CardHeaderProps> { }
export = CardHeader;
