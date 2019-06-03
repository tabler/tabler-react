import * as React from "react";

import { Props as TabProps } from "./Tab";

interface Props {
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
  selectedTitle: string;
}

function TabbedContainer(props: Props) {
  const tabs = React.Children.toArray(props.children);
  return <>{tabs.filter(tab => tab.props.title === props.selectedTitle)}</>;
}

/** @component */
export default TabbedContainer;
