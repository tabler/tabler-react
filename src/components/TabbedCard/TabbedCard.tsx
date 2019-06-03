import * as React from "react";
import Card from "../Card/Card";
import { TabbedContainer, TabbedHeader } from "../Tabs";
import Tab, { Props as TabProps } from "../Tabs/Tab";

type Props = {
  initialTab: string;
  children: React.ReactElement<TabProps>[];
};

type State = {
  selectedTitle: string;
};

class TabbedCard extends React.PureComponent<Props, State> {
  state = {
    selectedTitle: this.props.initialTab,
  };

  render() {
    const { children } = this.props;
    const { selectedTitle } = this.state;
    return (
      <Card>
        <Card.Header>
          <TabbedHeader
            selectedTitle={selectedTitle}
            stateCallback={newTitle =>
              this.setState({ selectedTitle: newTitle })
            }
          >
            {children}
          </TabbedHeader>
        </Card.Header>
        <Card.Body>
          <TabbedContainer selectedTitle={selectedTitle}>
            {children}
          </TabbedContainer>
        </Card.Body>
      </Card>
    );
  }
}

export default TabbedCard;
