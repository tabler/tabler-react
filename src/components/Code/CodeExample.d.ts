import * as React from 'react';

declare namespace CodeExample {
    export interface CodeExampleProps extends React.Props<CodeExample> {
      className?: string;
    }
}
declare class CodeExample extends React.Component<CodeExample.CodeExampleProps> { }
export = CodeExample;
