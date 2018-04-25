import * as React from 'react';

declare namespace H4 {
    interface IH4Props<T> extends React.HTMLProps<T> {

    }
    type Props = IH4Props<HTMLElement>
    type Component = React.StatelessComponent<Props>;
}
declare const H4: H4.Component;
export = H4;
