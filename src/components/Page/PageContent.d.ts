import * as React from 'react';

declare namespace PageContent {
    interface IPageContentProps<T> extends React.HTMLProps<T> {
    }
    type Props = IPageContentProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PageContent: PageContent.Component;
export = PageContent;
