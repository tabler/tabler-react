import * as React from 'react';

declare namespace PageMain {
    export interface IPageMainProps<T> extends React.HTMLProps<T> {}
    export type PageMainProps = IPageMainProps<HTMLDivElement>;
}
declare class PageMain extends React.Component<PageMain.PageMainProps> { }
export = PageMain;
