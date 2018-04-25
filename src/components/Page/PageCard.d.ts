import * as React from 'react';

declare namespace PageCard {
    interface IPageCardProps<T> extends React.HTMLProps<T> {
      title?: string;
      header?: React.ReactNode;
      footer?: React.ReactNode;
      RootComponent?: React.ReactType;
    }
    type Props = IPageCardProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const PageCard: PageCard.Component;
export = PageCard;
