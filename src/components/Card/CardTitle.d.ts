import * as React from 'react';

declare namespace CardTitle {
    export interface CardTitleProps extends React.Props<CardTitle> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
    }
}
declare class CardTitle extends React.Component<CardTitle.CardTitleProps> { }
export = CardTitle;
