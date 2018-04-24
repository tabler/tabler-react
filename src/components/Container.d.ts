import * as React from 'react';

declare namespace Container {
    export interface IContainerProps<T> extends React.HTMLProps<T> {
    }
    export type ContainerProps = IContainerProps<HTMLDivElement>;
}
declare class Container extends React.Component<Container.ContainerProps> { }
export = Container;
