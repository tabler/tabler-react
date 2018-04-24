import * as React from 'react';

declare namespace DefaultErrorPage {
    export interface IDefaultErrorPageProps<T> extends React.HTMLProps<T> {
      title: string;
      subtitle: string;
      details?: string;
    }
    export type DefaultErrorPageProps = IDefaultErrorPageProps<HTMLDivElement>;
}
declare class DefaultErrorPage extends React.Component<DefaultErrorPage.DefaultErrorPageProps> { }
export = DefaultErrorPage;
