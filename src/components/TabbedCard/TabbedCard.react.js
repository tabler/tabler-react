// @flow

import * as React from "react";
import Nav from "../Nav/Nav.react";
import { Tab } from "../Tabs";
import Card from "../Card/Card.react";
import { TabbedContainer } from "../Tabs";

type Props = {|
  +initialTab: string,
  +children: React.ChildrenArray<React.Element<typeof Tab>>,
|};

type State = {|
  selectedTitle: string,
|};

class TabbedCard extends React.PureComponent<Props, State> {
  state = {
    selectedTitle: this.props.initialTab,
  };

  render(): React.Node {
    const { children } = this.props;
    const tabs = React.Children.toArray(children);
    return (
      <Card>
        <Card.Header>
          <ul className="nav nav-tabs Tab_header_tabs">
            {tabs.map(tab => {
              const title = tab.props.title;
              const classes =
                title === this.state.selectedTitle ? "active" : "";
              return (
                <Nav.Item
                  value={title}
                  className={classes}
                  onClick={() => this.setState({ selectedTitle: title })}
                />
              );
            })}
          </ul>
        </Card.Header>
        <Card.Body>
          <TabbedContainer selectedTitle={this.state.selectedTitle}>
            {children}
          </TabbedContainer>
        </Card.Body>
      </Card>
    );
  }
}

export default TabbedCard;
