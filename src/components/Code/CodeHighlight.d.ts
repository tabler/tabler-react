import * as React from 'react';

declare namespace CodeHighlight {
    export interface CodeHighlightProps extends React.Props<CodeHighlight> {
      className?: string;
    }
}
declare class CodeHighlight extends React.Component<CodeHighlight.CodeHighlightProps> { }
export = CodeHighlight;
