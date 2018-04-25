import * as React from 'react';

declare namespace DefaultErrorPage {
    interface IDefaultErrorPageProps<T> extends React.HTMLProps<T> {
      title: string;
      subtitle: string;
      details?: string;
    }
    type Props = IDefaultErrorPageProps<HTMLElement>; // TODO: not sure if `Page`
    type Component = React.StatelessComponent<Props>;
}
declare const DefaultErrorPage: DefaultErrorPage.Component;
export = DefaultErrorPage;
