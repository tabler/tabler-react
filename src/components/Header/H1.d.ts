import * as React from 'react';

declare namespace H1 {
    interface IH1Props<T> extends React.HTMLProps<T> {
    }
    type Props = IH1Props<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const H1: H1.Component;
export = H1;
