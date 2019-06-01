import * as React from "react";

import Tab, { Props as TabProps } from "./Tab";
import TabbedContainer from "./TabbedContainer";
import TabbedHeader from "./TabbedHeader";

import "./Tabs.css";

interface Props {
  initialTab: string;
  children: React.ReactElement<TabProps>[];
}

interface State {
  selectedTitle: string;
}

class Tabs extends React.PureComponent<Props, State> {
  state = {
    selectedTitle: this.props.initialTab,
  };

  render() {
    const { children } = this.props;
    const { selectedTitle } = this.state;
    return (
      <React.Fragment>
        <TabbedHeader
          selectedTitle={selectedTitle}
          stateCallback={(newTitle: string) =>
            this.setState({ selectedTitle: newTitle })
          }
        >
          {children}
        </TabbedHeader>
        <div className={"margin-bottom-24"} />
        <TabbedContainer selectedTitle={selectedTitle}>
          {children}
        </TabbedContainer>
      </React.Fragment>
    );
  }
}

export default Tabs;
