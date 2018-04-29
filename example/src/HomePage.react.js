// @flow

import React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Header,
  Table,
  Alert,
  Progress,
  Dropdown,
  Button,
  Stamp,
  StampCard,
  StatsCard,
} from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

function Home() {
  return (
    <SiteWrapper>
      <Page.Content>
        <Page.Header>Dashboard</Page.Header>
        <Grid.Row cards={true}>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={6} total="43" label="New Tickets" />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-3}
              total="17"
              label="Closed Today"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={9} total="7" label="New Replies" />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={3}
              total="27.3k"
              label="Followers"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-2}
              total="$95"
              label="Daily earnings"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={-1} total="621" label="Products" />
          </Grid.Col>
          <Grid.Col lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Development Activity</Card.Title>
              </Card.Header>
              <div
                id="chart-development-activity"
                style={{ height: "10rem" }}
              />
              <Table
                cards={true}
                striped={true}
                responsive={true}
                className="table-vcenter"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader colSpan={2}>User</Table.ColHeader>
                    <Table.ColHeader>Commit</Table.ColHeader>
                    <Table.ColHeader>Date</Table.ColHeader>
                    <Table.ColHeader />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col className="w-1">
                      <Avatar imageURL="./demo/faces/male/9.jpg" />
                    </Table.Col>
                    <Table.Col>Ronald Bradley</Table.Col>
                    <Table.Col>Initial commit</Table.Col>
                    <Table.Col className="text-nowrap">May 6, 2018</Table.Col>
                    <Table.Col className="w-1">
                      <Icon link={true} name="trash" />
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <Avatar>BM</Avatar>
                    </Table.Col>
                    <Table.Col>Russell Gibson</Table.Col>
                    <Table.Col>Main structure</Table.Col>
                    <Table.Col className="text-nowrap">
                      April 22, 2018
                    </Table.Col>
                    <Table.Col>
                      <Icon link={true} name="trash" />
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <Avatar imageURL="./demo/faces/female/1.jpg" />
                    </Table.Col>
                    <Table.Col>Beverly Armstrong</Table.Col>
                    <Table.Col>Left sidebar adjustments</Table.Col>
                    <Table.Col className="text-nowrap">
                      April 15, 2018
                    </Table.Col>
                    <Table.Col>
                      <Icon link={true} name="trash" />
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <Avatar imageURL="./demo/faces/male/4.jpg" />
                    </Table.Col>
                    <Table.Col>Bobby Knight</Table.Col>
                    <Table.Col>Topbar dropdown style</Table.Col>
                    <Table.Col className="text-nowrap">April 8, 2018</Table.Col>
                    <Table.Col>
                      <Icon link={true} name="trash" />
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <Avatar imageURL="./demo/faces/female/11.jpg" />
                    </Table.Col>
                    <Table.Col>Sharon Wells</Table.Col>
                    <Table.Col>Fixes #625</Table.Col>
                    <Table.Col className="text-nowrap">April 9, 2018</Table.Col>
                    <Table.Col>
                      <Icon link={true} name="trash" />
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>

          <Grid.Col md={6}>
            <Alert type="primary">
              Are you in trouble?{" "}
              <Alert.Link href="/docs/index">Read our documentation</Alert.Link>{" "}
              with code samples.
            </Alert>
            <Grid.Row>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Chart title</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div id="chart-donut" style={{ height: "12rem" }} />
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Chart title</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div id="chart-pie" style={{ height: "12rem" }} />
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col sm={4}>
                <ProgressCard
                  header="New feedback"
                  content="62"
                  progressColor="red"
                  progressWidth={28}
                />
              </Grid.Col>
              <Grid.Col sm={4}>
                <ProgressCard
                  header="Today profit"
                  content="$652"
                  progressColor="green"
                  progressWidth={84}
                />
              </Grid.Col>
              <Grid.Col sm={4}>
                <ProgressCard
                  header="Users online"
                  content="76"
                  progressColor="yellow"
                  progressWidth={34}
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="blue"
              icon="dollar-sign"
              header={
                <a>
                  132
                  <small>Sales</small>
                </a>
              }
              footer={"12 waiting payments"}
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="green"
              icon="shopping-cart"
              header={
                <a>
                  78
                  <small>Orders</small>
                </a>
              }
              footer={"32 shipped"}
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="red"
              icon="users"
              header={
                <a>
                  1,352
                  <small>Members</small>
                </a>
              }
              footer={"163 registered today"}
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="yellow"
              icon="message-square"
              header={
                <a>
                  132
                  <small>Comments</small>
                </a>
              }
              footer={"16 waiting"}
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign
                cards
                className="text-nowrap"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader alignContent="center" className="w-1">
                      <i className="icon-people" />
                    </Table.ColHeader>
                    <Table.ColHeader>User</Table.ColHeader>
                    <Table.ColHeader>Usage</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Payment
                    </Table.ColHeader>
                    <Table.ColHeader>Activity</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Satisfaction
                    </Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      <i className="icon-settings" />
                    </Table.ColHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col alignContent="center">
                      <Avatar
                        imageURL="demo/faces/female/26.jpg"
                        className="d-block"
                        status="green"
                      />
                    </Table.Col>
                    <Table.Col>
                      <div>Elizabeth Martin</div>
                      <Text size="sm" muted>
                        Registered: Mar 19, 2018
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>42%</strong>
                        </div>
                        <div className="float-right">
                          <Text.Small muted>
                            Jun 11, 2015 - Jul 10, 2015
                          </Text.Small>
                        </div>
                      </div>
                      <Progress size="xs">
                        <Progress.Bar color="yellow" width={42} />
                      </Progress>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Icon payment name="visa" />
                    </Table.Col>
                    <Table.Col>
                      <Text size="sm" muted>
                        Last login
                      </Text>
                      <div>4 minutes ago</div>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <div
                        className="mx-auto chart-circle chart-circle-xs"
                        data-value="0.42"
                        data-thickness="3"
                        data-color="blue"
                      >
                        <div className="chart-circle-value">42%</div>
                      </div>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Dropdown>
                        <Dropdown.Trigger icon="more-vertical" />
                        <Dropdown.Menu position="right">
                          <Dropdown.Item icon="tag">Action </Dropdown.Item>
                          <Dropdown.Item icon="edit-2">
                            Another action{" "}
                          </Dropdown.Item>
                          <Dropdown.Item icon="message-square">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.ItemDivider />
                          <Dropdown.Item icon="link">
                            {" "}
                            Separated link
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col sm={6} lg={4}>
            <Card title="Browser Stats">
              <Table className="card-table">
                <Table.Row>
                  <Table.Col>
                    <Icon prefix="fa" name="chrome" className="text-muted" />
                  </Table.Col>
                  <Table.Col>Google Chrome</Table.Col>
                  <Table.Col className="text-right">
                    <Text RootComponent="span" muted>
                      23%
                    </Text>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col sm={6} lg={4}>
            <Card title="Projects">
              <Table cards>
                <Table.Row>
                  <Table.Col>Admin Template</Table.Col>
                  <Table.Col alignContent="right">
                    <Badge color="default">65%</Badge>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card title="Members">
              <Card.Body className="o-auto" style={{ height: "15rem" }}>
                <ul className="list-unstyled list-separated">
                  <li className="list-separated-item">
                    <Grid.Row className="align-items-center">
                      <Grid.Col auto>
                        <Avatar
                          size="md"
                          className="d-block"
                          imageURL="demo/faces/female/12.jpg"
                        />
                      </Grid.Col>
                      <Grid.Col>
                        <div>
                          <a href="javascript:void(0)" className="text-inherit">
                            Amanda Hunt
                          </a>
                        </div>
                        <Text.Small muted className="d-block item-except h-1x">
                          amanda_hunt@example.com
                        </Text.Small>
                      </Grid.Col>
                      <Grid.Col auto>
                        <Dropdown>
                          <Dropdown.Trigger icon="more-vertical" />
                          <Dropdown.Menu position="right">
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                              {" "}
                              Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                              {" "}
                              Something else here
                            </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                              {" "}
                              Separated link
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Grid.Col>
                    </Grid.Row>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={12}>
            <Grid.Row>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={5}
                  total="423"
                  label="Users online"
                  chart={
                    <div id="chart-bg-users-1" style={{ height: "100%" }} />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <div id="chart-bg-users-2" style={{ height: "100%" }} />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <div id="chart-bg-users-3" style={{ height: "100%" }} />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={9}
                  total="423"
                  label="Users online"
                  chart={
                    <div id="chart-bg-users-4" style={{ height: "100%" }} />
                  }
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col width={12}>
            <Card title="Invoices">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader className="w-1">No.</Table.ColHeader>
                    <Table.ColHeader>Invoice Subject</Table.ColHeader>
                    <Table.ColHeader>Client</Table.ColHeader>
                    <Table.ColHeader>VAT No.</Table.ColHeader>
                    <Table.ColHeader>Created</Table.ColHeader>
                    <Table.ColHeader>Status</Table.ColHeader>
                    <Table.ColHeader>Price</Table.ColHeader>
                    <Table.ColHeader />
                    <Table.ColHeader />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>
                      <Text RootComponent="span" muted>
                        001401
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <a href="invoice.html" className="text-inherit">
                        Design Works
                      </a>
                    </Table.Col>
                    <Table.Col>Carlson Limited</Table.Col>
                    <Table.Col>87956621</Table.Col>
                    <Table.Col>15 Dec 2017</Table.Col>
                    <Table.Col>
                      <span className="status-icon bg-success" /> Paid
                    </Table.Col>
                    <Table.Col>$887</Table.Col>
                    <Table.Col alignContent="right">
                      <Button size="sm" color="secondary">
                        Manage
                      </Button>
                      <div className="dropdown">
                        <Button color="secondary" size="sm" isDropdownToggle>
                          Actions
                        </Button>
                      </div>
                    </Table.Col>
                    <Table.Col>
                      <Icon link name="edit" />
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
