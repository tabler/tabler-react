// @flow

import * as React from "react";

import { Header, Alert, Button } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsAlertsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Alerts</Header.H2>
      <p>
        Provide contextual feedback messages for typical user actions with the
        handful of available and flexible alert messages.
      </p>
      <Alert type="primary" hasExtraSpace>
        <strong>Work in progress!</strong> More detailed documentation is coming
        soon.
      </Alert>

      <Header.H3>Default Alerts</Header.H3>
      <p>Add color contextual class.</p>

      <ComponentDemo>
        <React.Fragment>
          <Alert type="primary">
            This is a <strong>primary</strong> alert—check it out!
          </Alert>
          <Alert type="secondary">
            This is a <strong>secondary</strong> alert—check it out!
          </Alert>
          <Alert type="success">
            This is a <strong>success</strong> alert—check it out!
          </Alert>
          <Alert type="info">
            This is a <strong>info</strong> alert—check it out!
          </Alert>
          <Alert type="warning">
            This is a <strong>warning</strong> alert—check it out!
          </Alert>
          <Alert type="danger">
            This is a <strong>danger</strong> alert—check it out!
          </Alert>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Alert With Icon</Header.H3>
      <p>Add your icon name into the icon prop.</p>

      <ComponentDemo>
        <React.Fragment>
          <Alert type="primary" icon="bell">
            You have done 5 actions.
          </Alert>
          <Alert type="success" icon="check">
            The page has been added.
          </Alert>
          <Alert type="danger" icon="alert-triangle">
            The daily report has failed. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </Alert>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Alert isDismissible</Header.H3>
      <p>Add a isDismissible prop.</p>

      <ComponentDemo>
        <Alert type="warning" isDismissible>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Alert>
      </ComponentDemo>

      <Header.H3>Alert with avatar</Header.H3>

      <ComponentDemo>
        <Alert type="primary" avatar="./demo/faces/male/4.jpg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </Alert>
      </ComponentDemo>

      <Header.H3>Alert with buttons</Header.H3>

      <ComponentDemo>
        <Alert type="primary" isDismissible>
          <Header.H4>Some Message</Header.H4>
          <p>
            Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id
            dolore minim voluptate.
          </p>
          <Button.List>
            <Button color="success" RootComponent="button">
              Okay
            </Button>
            <Button color="secondary" RootComponent="button">
              No, thanks
            </Button>
          </Button.List>
        </Alert>
      </ComponentDemo>

      <Header.H3>Alert with extra space</Header.H3>

      <ComponentDemo>
        <React.Fragment>
          <span>Content Above</span>
          <Alert type="primary" hasExtraSpace>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Alert>
          <span>Content Below</span>
        </React.Fragment>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsAlertsPage;
