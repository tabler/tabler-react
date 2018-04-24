import * as React from 'react';

declare namespace AlertLink {
    export interface AlertLinkProps extends React.Props<AlertLink> {
      className?: string;
      href?: string;
    }
}
declare class AlertLink extends React.Component<AlertLink.AlertLinkProps> { }
export = AlertLink;
