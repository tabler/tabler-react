import * as React from 'react';

declare namespace CardTitle {
    interface ICardTitleProps<T> extends React.HTMLProps<T> {
      RootComponent?: React.ReactType;
    }
    type Props = ICardTitleProps<HTMLElement>; // TODO: not sure if `HTMLHeadingElement`
    type Component = React.StatelessComponent<Props>;
  }
declare const CardTitle: CardTitle.Component;
export = CardTitle;
