// @flow

import * as React from "react";
import Tab from "./Tab.react";
import Card from "../Card/Card.react";

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
    const tabs = React.Children.toArray(this.props.children);
    return (
      <Card>
        <Card.Header>
          <ul className="nav nav-tabs TabbedCard_header_tabs">
            {tabs.map(tab => {
              const title = tab.props.title;
              const classes =
                title === this.state.selectedTitle
                  ? "nav-link active"
                  : "nav-link";
              return (
                <li className="nav-item">
                  <a
                    className={classes}
                    onClick={() => this.setState({ selectedTitle: title })}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Card.Header>
        <Card.Body>
          {tabs.filter(tab => tab.props.title === this.state.selectedTitle)}
        </Card.Body>
      </Card>
    );
  }
}

export default TabbedCard;
