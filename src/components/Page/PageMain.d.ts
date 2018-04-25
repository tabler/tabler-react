import * as React from 'react';

declare namespace PageMain {
    interface IPageMainProps<T> extends React.HTMLProps<T> {}
    type Props = IPageMainProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PageMain: PageMain.Component;
export = PageMain;
