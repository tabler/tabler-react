import * as React from 'react';

declare namespace AlertLink {
    export interface IAlertLinkProps<T> extends React.HTMLProps<T> {
      className?: string;
      href?: string;
    }
    export type AlertLinkProps = IAlertLinkProps<HTMLDivElement>;
}
declare class AlertLink extends React.Component<AlertLink.AlertLinkProps> { }
export = AlertLink;
