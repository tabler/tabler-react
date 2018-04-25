import CodeExample from "./CodeExample";
import CodeHighlight from "./CodeHighlight";

declare namespace Code {
  interface NestedComponents {
    Example: CodeExample.Component,
    ExampleProps: CodeExample.Props;
    Highlight: CodeHighlight.Component,
    HighlightProps: CodeHighlight.Props;
  }
}

declare const Code: Code.NestedComponents;
export = Code;
