import * as React from 'react';

declare namespace Text {
    export interface TextProps extends React.Props<Text> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      color?: string;
      size?: string;
      wrap?: boolean;
    }
}
declare class Text extends React.Component<Text.TextProps> { }
export = Text;
