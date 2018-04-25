import * as React from 'react';

declare namespace PageHeader {
    interface IPageHeaderProps<T> extends React.HTMLProps<T> {
    }
    type Props = IPageHeaderProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PageHeader: PageHeader.Component;
export = PageHeader;
