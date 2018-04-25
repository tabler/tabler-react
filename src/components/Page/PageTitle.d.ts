import * as React from 'react';

declare namespace PageTitle {
    interface IPageTitleProps<T> extends React.HTMLProps<T> {
    }
    type Props = IPageTitleProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PageTitle: PageTitle.Component;
export = PageTitle;
