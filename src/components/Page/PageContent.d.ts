import * as React from 'react';

declare namespace PageContent {
    export interface IPageContentProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type PageContentProps = IPageContentProps<HTMLDivElement>;
}
declare class PageContent extends React.Component<PageContent.PageContentProps> { }
export = PageContent;
