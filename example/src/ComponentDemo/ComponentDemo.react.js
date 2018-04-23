// @flow

import * as React from "react";
import cn from "classnames";
import { Button } from "tabler-react";
import "./ComponentDemo.css";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import jsxToString from "jsx-to-string";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

type State = {|
  codeOpen: boolean,
|};

class ComponentDemo extends React.PureComponent<Props, State> {
  state = {
    codeOpen: false,
  };
  handleSourceButtonOnClick = (e: SyntheticMouseEvent<HTMLLinkElement>) => {
    e.preventDefault();
    this.setState(s => ({ codeOpen: !s.codeOpen }));
  };

  render() {
    const { className, children } = this.props;
    const { codeOpen } = this.state;
    const classes = cn(`highlight`, className);
    return (
      <div className="ComponentDemo">
        <Button
          onClick={this.handleSourceButtonOnClick}
          size="sm"
          color="primary"
          outline
          className="viewSourceBtn"
        >
          {codeOpen ? "Close" : "Source"}
        </Button>
        <div className="example">{children}</div>
        {codeOpen && (
          <div className="highlight">
            <SyntaxHighlighter language="jsx" style={prism}>
              {jsxToString(children)}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    );
  }
}

export default ComponentDemo;
