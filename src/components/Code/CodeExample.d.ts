import * as React from 'react';

declare namespace CodeExample {
    export interface ICodeExampleProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type CodeExampleProps = ICodeExampleProps<HTMLDivElement>;
}
declare class CodeExample extends React.Component<CodeExample.CodeExampleProps> { }
export = CodeExample;
