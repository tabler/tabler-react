import * as React from "react";
import Tab, { Props as TabProps } from "./Tab";
import Nav from "../Nav/Nav";

interface Props {
  children: React.ReactElement<TabProps>[];
  selectedTitle: string;
  stateCallback: (selectedTitle: string) => void;
}

function TabbedHeader(props: Props) {
  const { children, stateCallback } = props;
  const tabs = React.Children.toArray(children);
  return (
    <ul className="nav nav-tabs Tab_header_tabs">
      {tabs.map((tab, index) => {
        const title = tab.props.title;
        return (
          <Nav.Item
            key={index}
            value={title}
            onClick={() => stateCallback(title)}
            active={title === props.selectedTitle}
          />
        );
      })}
    </ul>
  );
}

export default TabbedHeader;
