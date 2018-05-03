// @flow

import * as React from "react";

import { Page, Grid, Card, Icon } from "tabler-react";

import faIcons from "../data/icons/fa";
import feIcons from "../data/icons/fe";
import flagIcons from "../data/icons/flag";
import paymentIcons from "../data/icons/payment";
import SiteWrapper from "../SiteWrapper.react";

function IconPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content title="Icons">
        <Card>
          <Card.Header>
            <Card.Title>Feather Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://feathericons.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>.
                </p>
                <p>
                  <code>&lt;Icon prefix="fe" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    {feIcons.map(icon => (
                      <li className="icons-list-item">
                        <Icon prefix="fe" name={icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Font Awesome</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  Powered by Font Awesome set. For more info{" "}
                  <a
                    href="http://fontawesome.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>.
                </p>
                <p>
                  <code>&lt;Icon prefix="fa" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    {faIcons.map(icon => (
                      <li className="icons-list-item">
                        <Icon prefix="fa" name={icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Flags</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  <code>&lt;Icon prefix="flag" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    {flagIcons.map(icon => (
                      <li className="icons-list-item">
                        <Icon prefix="flag" name={icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Payments</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  <code>&lt;Icon payment name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    {paymentIcons.map(icon => (
                      <li className="icons-list-item">
                        <Icon payment name={icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>
      </Page.Content>
    </SiteWrapper>
  );
}

export default IconPage;
