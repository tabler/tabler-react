import * as React from 'react';

declare namespace PageCard {
    export interface IPageCardProps<T> extends React.HTMLProps<T> {
      className?: string;
      title?: string;
      header?: React.ReactNode;
      footer?: React.ReactNode;
      RootComponent?: React.ReactElement<any>;
    }
    export type PageCardProps = IPageCardProps<HTMLDivElement>;
}
declare class PageCard extends React.Component<PageCard.PageCardProps> { }
export = PageCard;
