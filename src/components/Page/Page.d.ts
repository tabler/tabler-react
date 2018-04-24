import * as React from 'react';

declare namespace Page {
    export interface IPageProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type PageProps = IPageProps<HTMLDivElement>;
}
declare class Page extends React.Component<Page.PageProps> { }
export = Page;
