import * as React from 'react';

declare namespace CodeHighlight {
    export interface ICodeHighlightProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type CodeHighlightProps = ICodeHighlightProps<HTMLDivElement>;
}
declare class CodeHighlight extends React.Component<CodeHighlight.CodeHighlightProps> { }
export = CodeHighlight;
