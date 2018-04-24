import * as React from 'react';

declare namespace CardBody {
    export interface ICardBodyProps<T> extends React.HTMLProps<CardBody> {
      className?: string;
    }
    export type CardBodyProps = ICardBodyProps<HTMLDivElement>;
}
declare class CardBody extends React.Component<CardBody.CardBodyProps> { }
export = CardBody;
