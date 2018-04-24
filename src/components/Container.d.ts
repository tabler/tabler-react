import * as React from 'react';

declare namespace Container {
    export interface ContainerProps extends React.Props<Container> {
    }
}
declare class Container extends React.Component<Container.ContainerProps> { }
export = Container;
