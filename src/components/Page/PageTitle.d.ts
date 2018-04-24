import * as React from 'react';

declare namespace PageTitle {
    export interface IPageTitleProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type PageTitleProps = IPageTitleProps<HTMLDivElement>;
}
declare class PageTitle extends React.Component<PageTitle.PageTitleProps> { }
export = PageTitle;
