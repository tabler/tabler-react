import * as React from 'react';

declare namespace PageContentWithSidebar {
    export interface PageContentWithSidebarProps extends React.Props<PageContentWithSidebar> {
      className?: string;
      header?: React.ReactNode;
      sidebar?: React.ReactNode;
    }
}
declare class PageContentWithSidebar extends React.Component<PageContentWithSidebar.PageContentWithSidebarProps> { }
export = PageContentWithSidebar;
