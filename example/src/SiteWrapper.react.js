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

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +subItems?: Array<navItem>,
|};

const navBarItems: Array<navItem> = [
  { value: "Home", to: "/", icon: "home" },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      { value: "Cards Design", to: "/cards" },
      { value: "Charts", to: "/charts" },
      { value: "Pricing Cards", to: "/pricing-cards" },
    ],
  },
  {
    value: "Components",
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
                    <Icon prefix="fe" name="search" />
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
                  <Nav.Item
                    icon="file-text"
                    value="Documentation"
                    to="https://tabler.github.io/tabler-react/documentation/"
                  />
                </Nav>
              </Grid.Col>
            </Grid.Row>
          </Site.Navbar>
          {this.props.children}
        </Page.Main>
        <Site.Footer />
      </Page>
    );
  }
}

export default SiteWrapper;
