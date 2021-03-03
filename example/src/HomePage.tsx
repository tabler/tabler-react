import React from "react";
import Chart from "react-apexcharts";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Progress,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
  El,
} from "tabler-react";

import C3Chart from "./C3Chart";

import SiteWrapper from "./SiteWrapper";
import {
  cardChart1Data,
  chartActiveUsersData,
  chartActiveUsers2Data,
  chartTemperatureData,
  chartPieData,
  chartDonutData,
} from "./data/charts";
import TimeframeDropdown from "./components/TimeframeDropdown";

function Home() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row cards>
          <Grid.Col sm={6} lg={3}>
            <StatsCard
              layout={3}
              progressWidth={80}
              progressColor="blue"
              movement={6}
              movementLabel="Conversion Rate"
              total="43"
              label="New Tickets"
              actions={<TimeframeDropdown />}
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StatsCard
              layout={4}
              movement={-3}
              total="17"
              label="Closed Today"
              actions={<TimeframeDropdown />}
              chart={<Chart {...cardChart1Data} />}
            />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StatsCard
              layout={4}
              movement={9}
              total="7"
              label="New Replies"
              actions={<TimeframeDropdown />}
            >
              <El.Div mt={3} className="chart-sm">
                <Chart {...chartActiveUsersData} />
              </El.Div>
            </StatsCard>
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StatsCard
              layout={4}
              movement={3}
              total="27.3k"
              label="Followers"
              actions={<TimeframeDropdown />}
            >
              <El.Div mt={3} className="chart-sm">
                <Chart {...chartActiveUsers2Data} />
              </El.Div>
            </StatsCard>
          </Grid.Col>
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
          <Grid.Col sm={4}>
            <Card title="A" body={<Chart {...chartTemperatureData} />} />
          </Grid.Col>
          <Grid.Col sm={4}>
            <Card title="B">
              <Card.Body>
                <Chart {...chartDonutData} />
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col sm={4}>
            <Card title="C" body={<Chart {...chartPieData} />} />
          </Grid.Col>
          <Grid.Col sm={6} lg={3}>
            <StampCard
              color="blue"
              icon="dollar-sign"
              header={
                <a href="#sales">
                  132 <small>Sales</small>
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
                <a href="#orders">
                  78 <small>Orders</small>
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
                <a href="#members">
                  1,352 <small>Members</small>
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
                <a href="#comments">
                  132 <small>Comments</small>
                </a>
              }
              footer={"16 waiting"}
            />
          </Grid.Col>

          <Grid.Col width={12}>
            <Card title="Invoices">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "No.", className: "w-1" },
                  { content: "Invoice Subject" },
                  { content: "Client" },
                  { content: "VAT No." },
                  { content: "Created" },
                  { content: "Status" },
                  { content: "Price" },
                  { content: null },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        content: (
                          <Text RootComponent="span" muted>
                            001401
                          </Text>
                        ),
                      },
                      {
                        content: (
                          <a href="invoice.html" className="text-inherit">
                            Design Works
                          </a>
                        ),
                      },
                      {
                        content: (
                          <React.Fragment>
                            <Icon name="gb" flag /> Carlson Limited
                          </React.Fragment>
                        ),
                      },
                      { content: "87956621" },
                      { content: "15 Dec 2017" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Paid
                          </React.Fragment>
                        ),
                      },
                      { content: "$887" },
                      {
                        alignContent: "right",
                        content: (
                          <React.Fragment>
                            <Button
                              size="sm"
                              color="secondary"
                              as={El.A}
                              me={1}
                            >
                              Manage
                            </Button>
                            <Dropdown
                              as="span"
                              toggle={false}
                              triggerAs={Button}
                              triggerContent="Actions"
                              color="secondary"
                              triggerProps={{
                                color: "secondary",
                                size: "sm",
                                isDropdownToggle: true,
                              }}
                              itemsObject={[{ value: "Action" }]}
                              position="bottom-end"
                            />
                          </React.Fragment>
                        ),
                      },
                    ],
                  },
                ]}
              />
            </Card>
          </Grid.Col>

          <Grid.Col sm={3}>
            <ProgressCard
              header="New feedback"
              content="62"
              progressColor="red"
              progressWidth={28}
            />
          </Grid.Col>
          <Grid.Col sm={3}>
            <ProgressCard
              header="Today profit"
              content="$652"
              progressColor="green"
              progressWidth={84}
            />
          </Grid.Col>
          <Grid.Col sm={3}>
            <ProgressCard
              header="Users online"
              content="76"
              progressColor="yellow"
              progressWidth={34}
            />
          </Grid.Col>
          <Grid.Col sm={3}>
            <ProgressCard
              header="Users online"
              content="76"
              progressColor="yellow"
              progressWidth={34}
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
                verticalAlign="center"
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
                    <Table.Col alignContent="center">42%</Table.Col>
                    <Table.Col alignContent="center">
                      <Dropdown
                        icon="more-vertical"
                        toggle={false}
                        position="right"
                        items={
                          <React.Fragment>
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
                          </React.Fragment>
                        }
                      />
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
                <Table.Body>
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
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col sm={6} lg={4}>
            <Card title="Projects">
              <Table cards>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>Admin Template</Table.Col>
                    <Table.Col alignContent="right">
                      <Badge>65%</Badge>
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card title="Members">
              <Card.Body>
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
                          <a className="text-inherit" href="#amanda">
                            Amanda Hunt
                          </a>
                        </div>
                        <Text.Small muted className="d-block item-except h-1x">
                          amanda_hunt@example.com
                        </Text.Small>
                      </Grid.Col>
                      <Grid.Col auto>
                        <Dropdown
                          icon="more-vertical"
                          toggle={false}
                          position="right"
                          items={
                            <React.Fragment>
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
                            </React.Fragment>
                          }
                        />
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
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function (x: any) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#467fcf"],
                      }}
                    />
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
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function (x: any) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#e74c3c"],
                      }}
                    />
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
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function (x: any) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#5eba00"],
                      }}
                    />
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
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function (x: any) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#f1c40f"],
                      }}
                    />
                  }
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
