import * as React from 'react';

declare namespace PageContent {
    export interface PageContentProps extends React.Props<PageContent> {
      className?: string;
    }
}
declare class PageContent extends React.Component<PageContent.PageContentProps> { }
export = PageContent;
