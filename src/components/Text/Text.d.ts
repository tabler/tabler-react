import * as React from 'react';
import { Omit } from '../../index';

declare namespace Text {
    interface ITextProps<T> extends Omit<React.HTMLProps<T>, 'size' | 'wrap'> {
      RootComponent?: React.ReactType;
      color?: string;
      size?: string;
      wrap?: boolean;
    }
    type Props = ITextProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const Text: Text.Component;
export = Text;
