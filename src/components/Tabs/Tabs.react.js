// @flow

import * as React from "react";

import Tab from "./Tab.react";
//import TabbedContainer from "./TabbedContainer.react";
//import TabbedHeader from "./TabbedHeader.react";

type Props = {|
  +initialTab: string,
  +children: React.ChildrenArray<React.Element<typeof Tab>>,
|};

type State = {|
  selectedTitle: string,
|};

class Tabs extends React.PureComponent<Props, State> {}

export default Tabs;
