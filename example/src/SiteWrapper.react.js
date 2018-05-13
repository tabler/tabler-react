// @flow

import * as React from "react";
import { NavLink } from "react-router-dom";

import {
  Page,
  Site,
  Button,
  Nav,
  Dropdown,
  Avatar,
  Grid,
  Text,
  Icon,
} from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

const navBarItems: Array<navItem> = [
  { value: "Home", to: "/", icon: "home", LinkComponent: NavLink },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      { value: "Cards Design", to: "/cards", LinkComponent: NavLink },
      { value: "Charts", to: "/charts", LinkComponent: NavLink },
      { value: "Pricing Cards", to: "/pricing-cards", LinkComponent: NavLink },
    ],
  },
  {
    value: "Components",
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: NavLink },
      { value: "Icons", to: "/icons", LinkComponent: NavLink },
      { value: "Store", to: "/store", LinkComponent: NavLink },
      { value: "Blog", to: "/blog", LinkComponent: NavLink },
    ],
  },
  {
    value: "Pages",
    icon: "file",
    subItems: [
      { value: "Profile", to: "/profile", LinkComponent: NavLink },
      { value: "Login", to: "/login", LinkComponent: NavLink },
      { value: "Register", to: "/register", LinkComponent: NavLink },
      {
        value: "Forgot password",
        to: "/forgot-password",
        LinkComponent: NavLink,
      },
      { value: "400 error", to: "/400", LinkComponent: NavLink },
      { value: "401 error", to: "/401", LinkComponent: NavLink },
      { value: "403 error", to: "/403", LinkComponent: NavLink },
      { value: "404 error", to: "/404", LinkComponent: NavLink },
      { value: "500 error", to: "/500", LinkComponent: NavLink },
      { value: "503 error", to: "/503", LinkComponent: NavLink },
      { value: "Email", to: "/email", LinkComponent: NavLink },
      { value: "Empty page", to: "/empty-page", LinkComponent: NavLink },
      { value: "RTL", to: "/rtl", LinkComponent: NavLink },
    ],
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    LinkComponent: NavLink,
  },
  { value: "Gallery", to: "/gallery", icon: "image", LinkComponent: NavLink },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Page>
        <Page.Main>
          <Site.Header>
            <Site.Logo
              href={"/"}
              alt="Tabler React"
              src="./demo/brand/tabler.svg"
            />
            <div className="d-flex order-lg-2 ml-auto">
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

              <Dropdown
                triggerContent={<span className="nav-unread" />}
                isNavLink={true}
                toggle={false}
                icon="bell"
                desktopOnly
                items={
                  <React.Fragment>
                    <Dropdown.Item className="d-flex">
                      <Avatar
                        className="mr-3 align-self-center"
                        imageURL="demo/faces/male/41.jpg"
                      />
                      <div>
                        <strong>Nathan</strong> pushed new commit: Fix page load
                        performance issue.
                        <Text color="muted" size="small">
                          10 minutes ago
                        </Text>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className=" d-flex">
                      <Avatar
                        className="mr-3 align-self-center"
                        imageURL={"demo/faces/female/1.jpg"}
                      />
                      <div>
                        <strong>Alice</strong> started new task: Tabler UI
                        design.
                        <Text color="muted" size="small">
                          1 hour ago
                        </Text>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex">
                      <Avatar
                        className="mr-3 align-self-center"
                        imageURL={"demo/faces/female/18.jpg"}
                      />
                      <div>
                        <strong>Rose</strong> deployed new version of NodeJS
                        REST Api V3
                        <Text color="muted" size="small">
                          2 hours ago
                        </Text>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.ItemDivider />
                    <Dropdown.Item className="text-center text-muted-dark">
                      Mark all as read
                    </Dropdown.Item>
                  </React.Fragment>
                }
                position="right"
                arrow={true}
              />

              <Dropdown
                isNavLink
                triggerClassName="pr-0 leading-none"
                triggerContent={
                  <React.Fragment>
                    <Avatar imageURL={"./demo/faces/female/25.jpg"} />
                    <span className="ml-2 d-none d-lg-block">
                      <span className="text-default">Jane Pearson</span>
                      <small className="text-muted d-block mt-1">
                        Administrator
                      </small>
                    </span>
                  </React.Fragment>
                }
                position="right"
                arrow={true}
                toggle={false}
                itemsObject={[
                  { icon: "user", value: "Profile" },
                  { icon: "settings", value: "Settings" },
                  { icon: "mail", value: "Inbox", badge: "6" },
                  { icon: "send", value: "Message" },
                  { isDivider: true },
                  { icon: "help-circle", value: "Need help?" },
                  { icon: "log-out", value: "Sign out" },
                ]}
              />
            </div>
            <a
              className="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
            >
              <span className="header-toggler-icon" />
            </a>
          </Site.Header>
          <Site.Nav>
            <Grid.Row className="align-items-center">
              <Grid.Col lg={3} className="ml-auto">
                <form className="input-icon my-3 my-lg-0">
                  <input
                    type="search"
                    className="form-control header-search"
                    placeholder="Search&hellip;"
                    tabIndex="1"
                  />
                  <div className="input-icon-addon">
                    <Icon prefix="fe" name="search" />
                  </div>
                </form>
              </Grid.Col>
              <Grid.Col className="col-lg order-lg-first">
                <Nav
                  tabbed
                  className="border-0 flex-column flex-lg-row"
                  itemsObjects={navBarItems}
                />
              </Grid.Col>
            </Grid.Row>
          </Site.Nav>
          {this.props.children}
        </Page.Main>
        <Site.Footer />
      </Page>
    );
  }
}

export default SiteWrapper;
