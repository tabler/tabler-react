// @flow

import * as React from "react";
import Tab from "./Tab.react";
import Card from "../Card/Card.react";

type Props = {|
  +children: React.ChildrenArray<React.Element<typeof Tab>>,
|};

type State = {||};

class TabbedCard extends React.PureComponent<Props, State> {
  render(): React.Node {
    const { children } = this.props;
    const tabs = React.Children.toArray(children);

    //const num1 = tabs[0];
    //const abc = num1.props;

    //const a = tabs[0];
    //a.getTitle();

    return (
      <Card>
        <div className="card-header">
          <ul className="nav nav-tabs TabbedCard_header_tabs">
            {tabs.map(tab => (
              <li className="nav-item">
                <a className="nav-link active">Active</a>
              </li>
            ))}
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
        <Card.Body>{children}</Card.Body>
      </Card>
    );
  }
}

export default TabbedCard;
