import * as React from 'react';

declare namespace CodeExample {
    interface ICodeExampleProps<T> extends React.HTMLProps<T> {
    }
    type Props = ICodeExampleProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const CodeExample: CodeExample.Component;
export = CodeExample;
