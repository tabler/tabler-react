// @flow

import * as React from "react";
import { Container, Grid, List, Button } from "../../components";

const SiteFooter = () => (
  <React.Fragment>
    <div className="footer">
      <Container>
        <Grid.Row>
          <Grid.Col lg={8}>
            <Grid.Row>
              <Grid.Col width={6} md={3}>
                <List unstyled={true} className="mb-0">
                  <List.Item>
                    <a>First link</a>
                  </List.Item>
                  <List.Item>
                    <a>Second link</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col width={6} md={3}>
                <List unstyled={true} className="mb-0">
                  <List.Item>
                    <a>Third link</a>
                  </List.Item>
                  <List.Item>
                    <a>Fourth link</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col width={6} md={3}>
                <List unstyled={true} className="mb-0">
                  <List.Item>
                    <a>Fifth link</a>
                  </List.Item>
                  <List.Item>
                    <a>Sixth link</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col width={6} md={3}>
                <List unstyled={true} className="mb-0">
                  <List.Item>
                    <a>Other link</a>
                  </List.Item>
                  <List.Item>
                    <a>Last link</a>
                  </List.Item>
                </List>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col lg={4} className="mt-4 mt-lg-0">
            Premium and Open Source dashboard template with responsive and high
            quality UI. For Free!
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
    <footer className="footer">
      <Container>
        <Grid.Row className="align-items-center flex-row-reverse">
          <Grid.Col auto={true} className="ml-auto">
            <Grid.Row className="align-items-center">
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col width={12} lgAuto className="mt-3 mt-lg-0 text-center">
            Copyright © 2018
            <a href="."> Tabler-react</a>. Theme by
            <a
              href="https://codecalm.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              codecalm.net
            </a>{" "}
            All rights reserved.
          </Grid.Col>
        </Grid.Row>
      </Container>
    </footer>
  </React.Fragment>
);

export default SiteFooter;
