import * as React from 'react';

declare namespace CardBody {
    export interface CardBodyProps extends React.Props<CardBody> {
      className?: string;
    }
}
declare class CardBody extends React.Component<CardBody.CardBodyProps> { }
export = CardBody;
