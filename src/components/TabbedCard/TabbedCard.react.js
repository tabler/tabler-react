// @flow

import * as React from "react";
import Card from "../Card/Card.react";

type Props = {|
  +tabs: CardTabs,
|};

type State = {||};

class TabbedCard extends React.PureComponent<Props, State> {
  render(): React.Node {
    return (
      <Card>
        <div className="card-header">
          <ul className="nav nav-tabs TabbedCard_header_tabs">
            <li className="nav-item">
              <a className="nav-link active">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Disabled</a>
            </li>
          </ul>
        </div>
        <Card.Body>Hello World</Card.Body>
      </Card>
    );
  }
}

export default TabbedCard;
