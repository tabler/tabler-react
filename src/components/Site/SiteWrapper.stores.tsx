import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Site from "./";
import Nav from "../Nav";
import Button from "../Button";
import Grid from "../Grid";
import List from "../List";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Site", module);

stories.addDecorator(withKnobs);

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    useExact: true,
  },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      {
        value: "Cards Design",
        to: "/cards",
      },
      {
        value: "Charts",
        to: "/charts",
      },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
      },
    ],
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

const accountDropdownProps = {
  avatarURL: "./demo/faces/female/25.jpg",
  name: "Jane Pearson",
  description: "Administrator",
  options: [
    { icon: "user", value: "Profile" },
    { icon: "settings", value: "Settings" },
    { icon: "mail", value: "Inbox", badge: "6" },
    { icon: "send", value: "Message" },
    { isDivider: true },
    { icon: "help-circle", value: "Need help?" },
    { icon: "log-out", value: "Sign out" },
  ],
};

stories.add("Wrapper", () => {
  return (
    <Site.Wrapper
      headerProps={{
        href: "/",
        alt: "Tabler React",
        imageURL: "./demo/brand/tabler.svg",
        navItems: (
          <Nav.Item type="div" className="d-none d-md-flex">
            <Button
              href="https://github.com/tabler/tabler-react"
              target="_blank"
              outline
              size="sm"
              RootComponent="a"
              color="primary"
            >
              Source code
            </Button>
          </Nav.Item>
        ),
        accountDropdown: accountDropdownProps,
      }}
      navProps={{ itemsObjects: navBarItems }}
      footerProps={{
        links: [
          <a href="#" key="1">
            First Link
          </a>,
          <a href="#" key="2">
            Second Link
          </a>,
        ],
        note:
          "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
        copyright: (
          <React.Fragment>Copyright © 2019 tabler-react</React.Fragment>
        ),
        nav: (
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
        ),
      }}
    >
      Empty
    </Site.Wrapper>
  );
});
