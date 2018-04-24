import * as React from 'react';

declare namespace Card {
    export interface ICardProps<T> extends React.HTMLProps<T> {
      className?: string,
      title?: string,
      body?: React.ReactNode,
      RootComponent?: React.ReactElement<any>,
    }
    export type CardProps = ICardProps<HTMLDivElement>;
}
declare class Card extends React.Component<Card.CardProps> { }
export = Card;
