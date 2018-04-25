import * as React from 'react';

declare namespace CodeHighlight {
    interface ICodeHighlightProps<T> extends React.HTMLProps<T> {
    }
    type Props = ICodeHighlightProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const CodeHighlight: CodeHighlight.Component;
export = CodeHighlight;
