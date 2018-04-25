import * as React from 'react';

declare namespace H2 {
    interface IH2Props<T> extends React.HTMLProps<T> {

    }
    type Props = IH2Props<HTMLElement>
    type Component = React.StatelessComponent<Props>;
}
declare const H2: H2.Component;
export = H2;
