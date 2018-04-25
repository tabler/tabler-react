import * as React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardTitle from './CardTitle';

declare namespace Card {
    interface ICardProps<T> extends React.HTMLProps<T> {
      title?: string,
      body?: React.ReactNode,
      RootComponent?: React.ReactType,
    }
    type Props = ICardProps<HTMLElement>; // TODO: not sure if `HTMLDivElement`
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Header: CardHeader.Component;
      Body: CardBody.Component;
      Title: CardTitle.Component;
    }
}
declare const Card: Card.Component & Card.NestedComponents;
export = Card;
