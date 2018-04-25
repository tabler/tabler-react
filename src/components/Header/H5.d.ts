import * as React from 'react';

declare namespace H5 {
    interface IH5Props<T> extends React.HTMLProps<T> {
    }
    type Props = IH5Props<HTMLElement>
    type Component = React.StatelessComponent<Props>;
}
declare const H5: H5.Component;
export = H5;
