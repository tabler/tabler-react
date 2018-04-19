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

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Page>
        <Page.Main>
          <Site.Header>
            <div className="d-flex">
              <Site.Logo href={"#"} alt="ALT" src="#" />
              <div className="ml-auto d-flex order-lg-2">
                <Nav.Item RootComponent="div" className="d-none d-md-flex">
                  <Button
                    href="https://github.com/jonthomp/react-tabler-components"
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
                  <Dropdown.Trigger
                    RootComponent="a"
                    className="nav-link"
                    icon="message-square"
                  />
                  <Dropdown.Menu position="right" arrow={true} className="px-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium architecto asperiores dolorem, est fugiat in
                    maxime natus officia velit voluptas! Ab asperiores delectus
                    dolore dolores maxime nesciunt qui quia totam.
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown desktopOnly={true}>
                  <Dropdown.Trigger
                    RootComponent="a"
                    className="nav-link"
                    icon="bell"
                  >
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
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Trigger RootComponent="a" className="nav-link pr-0">
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
            </div>
          </Site.Header>
          <Site.Navbar>
            <Grid.Row className="align-items-center">
              <Grid.Col className="col-lg order-lg-first">
                <Nav>
                  <Nav.Item
                    icon="home"
                    RootComponent={NavLink}
                    to="/"
                    value="Home"
                  />

                  <Nav.Item icon="box" value="Interface">
                    <Nav.Submenu>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/cards"
                        children={"Cards Design"}
                      />
                      <Nav.SubmenuItem RootComponent={NavLink} to="/charts">
                        Charts
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/pricing-cards"
                      >
                        Pricing cards
                      </Nav.SubmenuItem>
                    </Nav.Submenu>
                  </Nav.Item>

                  <Nav.Item icon="calendar" value="Components">
                    <Nav.Submenu>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/maps">
                        Maps
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/icons">
                        Icons
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/store">
                        Store
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/blog">
                        Blog
                      </Nav.SubmenuItem>
                    </Nav.Submenu>
                  </Nav.Item>
                  <Nav.Item icon={"file"} value="Pages">
                    <Nav.Submenu>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/profile">
                        Profile
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/login">
                        Login
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/register">
                        Register
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/forgot-password"
                      >
                        Forgot password
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/400">
                        400 error
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/401">
                        401 error
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/403">
                        403 error
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/404">
                        404 error
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/500">
                        500 error
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/503">
                        503 error
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/email">
                        Email
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/empty">
                        Empty page
                      </Nav.SubmenuItem>
                    </Nav.Submenu>
                  </Nav.Item>
                  <Nav.Item
                    RootComponent={NavLink}
                    to="/form-elements"
                    icon="check-square"
                    value="Forms"
                  />
                  <Nav.Item
                    RootComponent={NavLink}
                    to="/gallery"
                    icon="image"
                    value="Gallery"
                  />
                  <Nav.Item
                    RootComponent={NavLink}
                    to="/docs/intro"
                    icon="file-text"
                    value="Documentation"
                  >
                    <Nav.Submenu>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/alerts"
                      >
                        Alerts
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/avatars"
                      >
                        Avatars
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/buttons"
                      >
                        Buttons
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/docs/cards">
                        Cards
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/charts"
                      >
                        Charts
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/colors"
                      >
                        Colors
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/form-components"
                      >
                        Form Components
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem RootComponent={NavLink} to="/docs/tags">
                        Tags
                      </Nav.SubmenuItem>
                      <Nav.SubmenuItem
                        RootComponent={NavLink}
                        to="/docs/typography"
                      >
                        Typography
                      </Nav.SubmenuItem>
                    </Nav.Submenu>
                  </Nav.Item>
                </Nav>
              </Grid.Col>
              <Grid.Col lg={3} className="ml-auto">
                <form className="input-icon">
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
            </Grid.Row>
          </Site.Navbar>
          {this.props.children}
        </Page.Main>
      </Page>
    );
  }
}

export default SiteWrapper;
