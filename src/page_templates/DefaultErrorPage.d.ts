import * as React from 'react';

declare namespace DefaultErrorPage {
    export interface DefaultErrorPageProps extends React.Props<DefaultErrorPage> {
      title: string;
      subtitle: string;
      details?: string;
    }
}
declare class DefaultErrorPage extends React.Component<DefaultErrorPage.DefaultErrorPageProps> { }
export = DefaultErrorPage;
