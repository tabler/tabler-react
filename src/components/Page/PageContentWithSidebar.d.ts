import * as React from 'react';

declare namespace PageContentWithSidebar {
    export interface IPageContentWithSidebarProps<T> extends React.HTMLProps<T> {
      className?: string;
      header?: React.ReactNode;
      sidebar?: React.ReactNode;
    }
    export type PageContentWithSidebarProps = IPageContentWithSidebarProps<HTMLDivElement>;
}
declare class PageContentWithSidebar extends React.Component<PageContentWithSidebar.PageContentWithSidebarProps> { }
export = PageContentWithSidebar;
