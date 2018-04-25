import * as React from 'react';

declare namespace CardHeader {
    interface ICardHeaderProps<T> extends React.HTMLProps<T> {
    }
    type Props = ICardHeaderProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const CardHeader: CardHeader.Component;
export = CardHeader;
