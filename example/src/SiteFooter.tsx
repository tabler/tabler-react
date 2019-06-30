import React from "react";

import { Site, Grid, List, Button } from "tabler-react";

const SiteFooter = function() {
  return (
    <Site.Footer
      links={[
        <a href="#1" key="1">
          First Link
        </a>,
        <a href="#2" key="2">
          Second Link
        </a>,
        <a href="#3" key="3">
          Third Link
        </a>,
        <a href="#4" key="4">
          Fourth Link
        </a>,
        <a href="#5" key="5">
          Five Link
        </a>,
        <a href="#6" key="6">
          Sixth Link
        </a>,
        <a href="#7" key="7">
          Seventh Link
        </a>,
        <a href="#8" key="8">
          Eigth Link
        </a>,
      ]}
      copyright={
        <React.Fragment>
          Copyright © 2019
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
        </React.Fragment>
      }
      nav={
        <React.Fragment>
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
        </React.Fragment>
      }
      note="Premium and Open Source dashboard template with responsive and high quality UI. For Free!"
    />
  );
};

export default SiteFooter;
