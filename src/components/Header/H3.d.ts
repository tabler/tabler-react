import * as React from 'react';

declare namespace H3 {
    interface IH3Props<T> extends React.HTMLProps<T> {

    }
    type Props = IH3Props<HTMLElement>
    type Component = React.StatelessComponent<Props>;
}
declare const H3: H3.Component;
export = H3;
