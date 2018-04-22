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
} from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type navItem = {|
  +value: string,
  +to: string,
  +icon?: string,
  +subItems?: Array<navItem>,
|};

const navBarItems: Array<navItem> = Array(
  { value: "Home", to: "/", icon: "home" },
  {
    value: "Interface",
    to: null,
    icon: "box",
    subItems: [
      { value: "Cards Design", to: "/cards", icon: null },
      { value: "Charts", to: "/charts", icon: null },
      { value: "Pricing Cards", to: "/pricing-cards", icon: null },
    ],
  },
  {
    value: "Components",
    to: null,
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps" },
      { value: "Icons", to: "/icons" },
      { value: "Store", to: "/store" },
      { value: "Blog", to: "/blog" },
    ],
  },
  {
    value: "Pages",
    to: null,
    icon: "file",
    subItems: [
      { value: "Profile", to: "/profile" },
      { value: "Login", to: "/login" },
      { value: "Register", to: "/register" },
      { value: "Forgot password", to: "/forgot-password" },
      { value: "400 error", to: "/400" },
      { value: "401 error", to: "/401" },
      { value: "403 error", to: "/403" },
      { value: "404 error", to: "/404" },
      { value: "500 error", to: "/500" },
      { value: "503 error", to: "/503" },
      { value: "Email", to: "/email" },
      { value: "Empty page", to: "/empty-page" },
      { value: "RTL", to: "/rtl" },
    ],
  },
  { value: "Forms", to: "/form-elements", icon: "check-square" },
  { value: "Gallery", to: "/gallery", icon: "image" },
  {
    value: "Documentation",
    to: "/docs/intro",
    icon: "file-text",
    subItems: [
      { value: "Alerts", to: "/docs/alerts" },
      { value: "Avatars", to: "/docs/avatars" },
      { value: "Buttons", to: "/docs/store" },
      { value: "Cards", to: "/docs/blog" },
      { value: "Charts", to: "/docs/maps" },
      { value: "Colors", to: "/docs/icons" },
      { value: "Form Components", to: "/docs/form-components" },
      { value: "Tags", to: "/docs/tags" },
      { value: "Typography", to: "/docs/typography" },
    ],
  }
);

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Page>
        <Page.Main>
          <Site.Header>
            <Site.Logo href={"/"} alt="ALT" src="#" />
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

              <Dropdown desktopOnly={true}>
                <Dropdown.Trigger type="link" className="nav-link" icon="bell">
                  <span className="nav-unread" />
                </Dropdown.Trigger>
                <Dropdown.Menu position="right" arrow={true}>
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
                      <strong>Alice</strong> started new task: Tabler UI design.
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
                      <strong>Rose</strong> deployed new version of NodeJS REST
                      Api V3
                      <Text color="muted" size="small">
                        2 hours ago
                      </Text>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.ItemDivider />
                  <Dropdown.Item className="text-center text-muted-dark">
                    Mark all as read
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Trigger
                  type="link"
                  className="nav-link pr-0 leading-none"
                >
                  <Avatar imageURL={"./demo/faces/female/25.jpg"} />
                  <span className="ml-2 d-none d-lg-block">
                    <span className="text-default">Jane Pearson</span>
                    <small className="text-muted d-block mt-1">
                      Administrator
                    </small>
                  </span>
                </Dropdown.Trigger>

                <Dropdown.Menu position="right" arrow={true}>
                  <Dropdown.Item icon="user" value="Profile" />
                  <Dropdown.Item icon="settings" value="Settings" />
                  <Dropdown.Item icon="mail" badge="6" value="Inbox" />
                  <Dropdown.Item icon="send" value="Message" />
                  <Dropdown.ItemDivider />
                  <Dropdown.Item icon="help-circle" value="Need help?" />
                  <Dropdown.Item icon="log-out" value="Sign out" />
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <a
              className="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
            >
              <span className="header-toggler-icon" />
            </a>
          </Site.Header>
          <Site.Navbar>
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
                    <i className="fe fe-search" />
                  </div>
                </form>
              </Grid.Col>
              <Grid.Col className="col-lg order-lg-first">
                <Nav tabbed className="border-0 flex-column flex-lg-row">
                  {navBarItems.map((a, ai) => (
                    <Nav.Item
                      key={ai}
                      icon={a.icon}
                      value={a.value}
                      to={a.to}
                      hasSubNav={!!a.subItems}
                      LinkComponent={a.to && NavLink}
                    >
                      {a.subItems &&
                        a.subItems.map((b, bi) => (
                          <Nav.SubItem
                            key={bi}
                            value={b.value}
                            to={b.to}
                            icon={b.icon}
                            LinkComponent={NavLink}
                          />
                        ))}
                    </Nav.Item>
                  ))}
                </Nav>
              </Grid.Col>
            </Grid.Row>
          </Site.Navbar>
          {this.props.children}
        </Page.Main>
      </Page>
    );
  }
}

export default SiteWrapper;
