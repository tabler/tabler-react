import * as React from "react";

export interface TabProps {
  title: string;
  children: React.ReactNode;
}

interface State {}

class Tab extends React.PureComponent<TabProps, State> {
  render() {
    return this.props.children;
  }
}

export default Tab;
