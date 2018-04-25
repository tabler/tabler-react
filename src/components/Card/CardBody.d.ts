import * as React from 'react';

declare namespace CardBody {
    interface ICardBodyProps<T> extends React.HTMLProps<T> {
    }
    type Props = ICardBodyProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const CardBody: CardBody.Component;
export = CardBody;
