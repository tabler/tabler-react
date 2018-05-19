// @flow

import * as React from "react";

import Tab from "./Tab.react";

type Props = {|
  +children: React.ChildrenArray<React.Element<typeof Tab>>,
  +selectedTitle: string,
|};

function TabbedContainer(props: Props): React.Node {
  const tabs = React.Children.toArray(props.children);
  return tabs.filter(tab => tab.props.title === props.selectedTitle);
}

/** @component */
export default TabbedContainer;
