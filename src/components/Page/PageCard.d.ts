import * as React from 'react';

declare namespace PageCard {
    export interface PageCardProps extends React.Props<PageCard> {
      className?: string;
      title?: string;
      header?: React.ReactNode;
      footer?: React.ReactNode;
      RootComponent?: React.ReactElement<any>;
    }
}
declare class PageCard extends React.Component<PageCard.PageCardProps> { }
export = PageCard;
