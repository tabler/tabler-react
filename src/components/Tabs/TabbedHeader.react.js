// @flow

import * as React from "react";
import Tab from "./Tab.react";
import Nav from "../Nav/Nav.react";

type Props = {|
  +children: React.ChildrenArray<React.Element<typeof Tab>>,
  +selectedTitle: string,
  +stateCallback: (selectedTitle: string) => void,
|};

function TabbedHeader(props: Props): React.Node {
  const { children, stateCallback } = props;
  const tabs = React.Children.toArray(children);
  return (
    <ul className="nav nav-tabs Tab_header_tabs">
      {tabs.map((tab, index) => {
        const title = tab.props.title;
        const classes = title === props.selectedTitle ? "active" : "";
        return (
          <Nav.Item
            key={index}
            value={title}
            className={classes}
            onClick={() => stateCallback(title)}
          />
        );
      })}
    </ul>
  );
}

export default TabbedHeader;
