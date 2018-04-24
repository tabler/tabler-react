import * as React from 'react';

declare namespace PageHeader {
    export interface IPageHeaderProps<T> extends React.HTMLProps<T> {
    }
    export type PageHeaderProps = IPageHeaderProps<HTMLDivElement>;
}
declare class PageHeader extends React.Component<PageHeader.PageHeaderProps> { }
export = PageHeader;
