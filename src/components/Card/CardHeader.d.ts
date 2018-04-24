import * as React from 'react';

declare namespace CardHeader {
    export interface CardHeaderProps extends React.Props<CardHeader> {
      className?: string;
    }
}
declare class CardHeader extends React.Component<CardHeader.CardHeaderProps> { }
export = CardHeader;
