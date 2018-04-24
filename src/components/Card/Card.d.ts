import * as React from 'react';

declare namespace Card {
    export interface CardProps extends React.Props<Card> {
      className?: string,
      title?: string,
      body?: React.ReactNode,
      RootComponent?: React.ReactElement<any>,
    }
}
declare class Card extends React.Component<Card.CardProps> { }
export = Card;
