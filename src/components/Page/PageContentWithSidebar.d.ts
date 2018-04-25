import * as React from 'react';

declare namespace PageContentWithSidebar {
    interface IPageContentWithSidebarProps<T> extends React.HTMLProps<T> {
      header?: React.ReactNode;
      sidebar?: React.ReactNode;
    }
    type Props = IPageContentWithSidebarProps<HTMLElement>; // TODO: not sure if `Page.Content`
    type Component = React.StatelessComponent<Props>;
}
declare const PageContentWithSidebar: PageContentWithSidebar.Component;
export = PageContentWithSidebar;
