import * as React from 'react';

declare namespace Container {
    interface IContainerProps<T> extends React.HTMLProps<T> {
    }
    type Props = IContainerProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const Container: Container.Component;
export = Container;
