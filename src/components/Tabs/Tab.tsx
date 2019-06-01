import * as React from "react";

export interface Props {
  title: string;
  children: React.ReactNode;
}

interface State {}

class Tab extends React.PureComponent<Props, State> {
  render() {
    return this.props.children;
  }
}

export default Tab;
