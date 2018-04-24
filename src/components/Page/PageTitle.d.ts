import * as React from 'react';

declare namespace PageTitle {
    export interface PageTitleProps extends React.Props<PageTitle> {
      className?: string;
    }
}
declare class PageTitle extends React.Component<PageTitle.PageTitleProps> { }
export = PageTitle;
