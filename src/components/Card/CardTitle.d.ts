import * as React from 'react';

declare namespace CardTitle {
    export interface ICardTitleProps<T> extends React.HTMLProps<T> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
    }
    export type CardTitleProps = ICardTitleProps<HTMLDivElement>;
}
declare class CardTitle extends React.Component<CardTitle.CardTitleProps> { }
export = CardTitle;
