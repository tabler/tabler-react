import * as React from 'react';

declare namespace AlertLink {
    interface IAlertLinkProps<T> extends React.HTMLProps<T> {
      href?: string;
    }
    type Props = IAlertLinkProps<HTMLAnchorElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const AlertLink: AlertLink.Component;
export = AlertLink;
