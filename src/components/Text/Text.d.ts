import * as React from 'react';
import { Omit } from '../../index';

declare namespace Text {
    export interface ITextProps<T> extends Omit<React.HTMLProps<T>, 'size' | 'wrap'> {
      className?: string;
      RootComponent?: React.ReactElement<any>;
      color?: string;
      size?: string;
      wrap?: boolean;
    }
    export type TextProps = ITextProps<HTMLDivElement>;
}
declare class Text extends React.Component<Text.TextProps> { }
export = Text;
