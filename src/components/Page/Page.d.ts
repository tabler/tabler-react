import * as React from 'react';

declare namespace Page {
    export interface PageProps extends React.Props<Page> {
      className?: string;
    }
}
declare class Page extends React.Component<Page.PageProps> { }
export = Page;
