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
} from "tabler-react";

import SiteWrapper from "../SiteWrapper";

class Home extends React.Component<void, void> {
  render() {
    return (
      <SiteWrapper>
        <Page.Content>
          <Page.Header>Dashboard</Page.Header>
          <Grid.Row cards={true}>
            <Grid.Col width={6} sm={4} lg={2}>
              <Card>
                <Card.Body className="p-3 text-center">
                  <Text color="green" className="text-right">
                    6%
                    <Icon name="chevron-up" />
                  </Text>
                  <Header className="m-0">43</Header>
                  <Text color="muted" className=" mb-4">
                    New Tickets
                  </Text>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Card>
                <Card.Body className="p-3 text-center">
                  <Text color="red" className="text-right">
                    -3%
                    <Icon name="chevron-down" />
                  </Text>
                  <Header className="m-0">17</Header>
                  <Text color="muted" className="mb-4">
                    Closed Today
                  </Text>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Card>
                <Card.Body className=" p-3 text-center">
                  <Text color="green" className="text-right">
                    9%
                    <Icon name="chevron-up" />
                  </Text>
                  <Header className="m-0">7</Header>
                  <Text color="muted" className=" mb-4">
                    New Replies
                  </Text>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Card>
                <Card.Body className="p-3 text-center">
                  <Text color="green" className="text-right">
                    3%
                    <Icon name="chevron-up" />
                  </Text>
                  <Header className="m-0">27.3K</Header>
                  <Text color="muted" className="mb-4">
                    Followers
                  </Text>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Card>
                <Card.Body className="p-3 text-center">
                  <Text color="red" className="text-right ">
                    -2%
                    <Icon name="chevron-down" />
                  </Text>
                  <Header className="m-0">$95</Header>
                  <Text color="muted" className="mb-4">
                    Daily Earnings
                  </Text>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col width={6} sm={4} lg={2}>
              <Card>
                <Card.Body className=" p-3 text-center">
                  <Text color="red" className="text-right ">
                    -1%
                    <Icon name="chevron-down" />
                  </Text>
                  <Header className="m-0">621</Header>
                  <Text color="muted" className="mb-4">
                    Products
                  </Text>
                </Card.Body>
              </Card>
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
                      <Table.ColHeader colSpan="2">User</Table.ColHeader>
                      <Table.ColHeader>Commit</Table.ColHeader>
                      <Table.ColHeader>Date</Table.ColHeader>
                      <Table.ColHeader />
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Col className="w-1">
                        <Avatar src="./demo/faces/male/9.jpg" />
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
                        <Avatar src="./demo/faces/female/1.jpg" />
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
                        <Avatar src="./demo/faces/male/4.jpg" />
                      </Table.Col>
                      <Table.Col>Bobby Knight</Table.Col>
                      <Table.Col>Topbar dropdown style</Table.Col>
                      <Table.Col className="text-nowrap">
                        April 8, 2018
                      </Table.Col>
                      <Table.Col>
                        <Icon link={true} name="trash" />
                      </Table.Col>
                    </Table.Row>
                    <Table.Row>
                      <Table.Col>
                        <Avatar src="./demo/faces/female/11.jpg" />
                      </Table.Col>
                      <Table.Col>Sharon Wells</Table.Col>
                      <Table.Col>Fixes #625</Table.Col>
                      <Table.Col className="text-nowrap">
                        April 9, 2018
                      </Table.Col>
                      <Table.Col>
                        <Icon link={true} name="trash" />
                      </Table.Col>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card>
            </Grid.Col>

            <Grid.Col md={6}>
              <Alert primary>
                Are you in trouble?{" "}
                <Alert.Link href="./docs/index.html">
                  Read our documentation
                </Alert.Link>{" "}
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
                  <Card>
                    <Card.Body className="text-center">
                      <Header size={5}>New feedback</Header>
                      <div className="display-4 font-weight-bold mb-4">62</div>
                      <Progress size="sm">
                        <Progress.Bar color="red" width={28} />
                      </Progress>
                    </Card.Body>
                  </Card>
                </Grid.Col>
                <Grid.Col sm={4}>
                  <Card>
                    <Card.Body className="text-center">
                      <Header size={5}>Today profit</Header>
                      <div className="display-4 font-weight-bold mb-4">
                        $652
                      </div>
                      <Progress size="sm">
                        <Progress.Bar color="green" width={84} />
                      </Progress>
                    </Card.Body>
                  </Card>
                </Grid.Col>
                <Grid.Col sm={4}>
                  <Card>
                    <Card.Body className="text-center">
                      <Header size={5}>Users online</Header>
                      <div className="display-4 font-weight-bold mb-4">76</div>
                      <Progress size="sm">
                        <Progress.Bar color="yellow" width={34} />
                      </Progress>
                    </Card.Body>
                  </Card>
                </Grid.Col>
              </Grid.Row>
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <Card className="p-3">
                <div className="d-flex align-items-center">
                  <span className="stamp stamp-md bg-blue mr-3">
                    <Icon name="dollar-sign" />
                  </span>
                  <div>
                    <h4 className="m-0">
                      <a>
                        132
                        <small>Sales</small>
                      </a>
                    </h4>
                    <small className="text-muted">12 waiting payments</small>
                  </div>
                </div>
              </Card>
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <Card className="p-3">
                <div className="d-flex align-items-center">
                  <span className="stamp stamp-md bg-green mr-3">
                    <Icon name="shopping-cart" />
                  </span>
                  <div>
                    <h4 className="m-0">
                      <a>
                        78
                        <small>Orders</small>
                      </a>
                    </h4>
                    <small className="text-muted">32 shipped</small>
                  </div>
                </div>
              </Card>
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <Card className="p-3">
                <div className="d-flex align-items-center">
                  <span className="stamp stamp-md bg-red mr-3">
                    <Icon name="users" />
                  </span>
                  <div>
                    <h4 className="m-0">
                      <a>
                        1,352
                        <small>Members</small>
                      </a>
                    </h4>
                    <small className="text-muted">163 registered today</small>
                  </div>
                </div>
              </Card>
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <Card className="p-3">
                <div className="d-flex align-items-center">
                  <span className="stamp stamp-md bg-yellow mr-3">
                    <i className="fe fe-message-square" />
                  </span>
                  <div>
                    <h4 className="m-0">
                      <a>
                        132
                        <small>Comments</small>
                      </a>
                    </h4>
                    <small className="text-muted">16 waiting</small>
                  </div>
                </div>
              </Card>
            </Grid.Col>
          </Grid.Row>
          {/* <div className="row row-cards row-deck">
            <div className="col-lg-6">
              <div className="card card-aside">
                <a

                  className="card-aside-column"
                  style="background-image: url(./demo/photos/david-klaasen-54203-500.jpg)"
                />
                <div className="card-body d-flex flex-column">
                  <h4>
                    <a >And this isn't my nose. This is a false one.</a>
                  </h4>
                  <div className="text-muted">
                    Look, my liege! The Knights Who Say Ni demand a sacrifice!
                    …Are you suggesting that coconuts migr...
                  </div>
                  <div className="d-flex align-items-center pt-5 mt-auto">
                    <div
                      className="avatar avatar-md mr-3"
                      style="background-image: url(./demo/faces/female/18.jpg)"
                    />
                    <div>
                      <a href="./profile.html" className="text-default">
                        Rose Bradley
                      </a>
                      <small className="d-block text-muted">3 days ago</small>
                    </div>
                    <div className="ml-auto text-muted">
                      <a
                        href='#'
                        className="icon d-none d-md-inline-block ml-3"
                      >
                        <i className="fe fe-heart mr-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-aside">
                <a

                  className="card-aside-column"
                  style="background-image: url(./demo/photos/david-marcu-114194-500.jpg)"
                />
                <div className="card-body d-flex flex-column">
                  <h4>
                    <a >Well, I didn't vote for you.</a>
                  </h4>
                  <div className="text-muted">
                    Well, we did do the nose. Why? Shut up! Will you shut up?!
                    You don't frighten us, English pig-dog...
                  </div>
                  <div className="d-flex align-items-center pt-5 mt-auto">
                    <div
                      className="avatar avatar-md mr-3"
                      style="background-image: url(./demo/faces/male/16.jpg)"
                    />
                    <div>
                      <a href="./profile.html" className="text-default">
                        Peter Richards
                      </a>
                      <small className="d-block text-muted">3 days ago</small>
                    </div>
                    <div className="ml-auto text-muted">
                      <a
                        href='#'
                        className="icon d-none d-md-inline-block ml-3"
                      >
                        <i className="fe fe-heart mr-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cards row-deck">
            <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                    <thead>
                      <tr>
                        <th className="text-center w-1">
                          <i className="icon-people" />
                        </th>
                        <th>User</th>
                        <th>Usage</th>
                        <th className="text-center">Payment</th>
                        <th>Activity</th>
                        <th className="text-center">Satisfaction</th>
                        <th className="text-center">
                          <i className="icon-settings" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/female/26.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Elizabeth Martin</div>
                          <div className="small text-muted">
                            Registered: Mar 7, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>42%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-yellow"
                              role="progressbar"
                              style="width: 42%"
                              aria-valuenow="42"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-visa" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>4 minutes ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.42"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">42%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/female/17.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Michelle Schultz</div>
                          <div className="small text-muted">
                            Registered: Feb 19, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>0%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-red"
                              role="progressbar"
                              style="width: 0%"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-googlewallet" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>5 minutes ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.0"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">0%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/female/21.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Crystal Austin</div>
                          <div className="small text-muted">
                            Registered: Mar 26, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>96%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style="width: 96%"
                              aria-valuenow="96"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-mastercard" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>a minute ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.96"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">96%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/male/32.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Douglas Ray</div>
                          <div className="small text-muted">
                            Registered: Jan 4, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>6%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-red"
                              role="progressbar"
                              style="width: 6%"
                              aria-valuenow="6"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-shopify" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>a minute ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.06"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">6%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/female/12.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Teresa Reyes</div>
                          <div className="small text-muted">
                            Registered: Feb 21, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>36%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-red"
                              role="progressbar"
                              style="width: 36%"
                              aria-valuenow="36"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-ebay" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>2 minutes ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.36"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">36%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/female/4.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Emma Wade</div>
                          <div className="small text-muted">
                            Registered: Mar 8, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>7%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-red"
                              role="progressbar"
                              style="width: 7%"
                              aria-valuenow="7"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-paypal" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>a minute ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.07"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">7%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/female/27.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Carol Henderson</div>
                          <div className="small text-muted">
                            Registered: Feb 10, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>80%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style="width: 80%"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-visa" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>9 minutes ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.8"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">80%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          <div
                            className="avatar d-block"
                            style="background-image: url(demo/faces/male/20.jpg)"
                          >
                            <span className="avatar-status bg-green" />
                          </div>
                        </td>
                        <td>
                          <div>Christopher Harvey</div>
                          <div className="small text-muted">
                            Registered: Jan 10, 2018
                          </div>
                        </td>
                        <td>
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>83%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">
                                Jun 11, 2015 - Jul 10, 2015
                              </small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style="width: 83%"
                              aria-valuenow="83"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            />
                          </div>
                        </td>
                        <td className="text-center">
                          <i className="payment payment-googlewallet" />
                        </td>
                        <td>
                          <div className="small text-muted">Last login</div>
                          <div>8 minutes ago</div>
                        </td>
                        <td className="text-center">
                          <div
                            className="mx-auto chart-circle chart-circle-xs"
                            data-value="0.83"
                            data-thickness="3"
                            data-color="blue"
                          >
                            <div className="chart-circle-value">83%</div>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Browser Stats</h4>
                </div>
                <table className="table card-table">
                  <tr>
                    <td width="1">
                      <i className="fa fa-chrome text-muted" />
                    </td>
                    <td>Google Chrome</td>
                    <td className="text-right">
                      <span className="text-muted">23%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-firefox text-muted" />
                    </td>
                    <td>Mozila Firefox</td>
                    <td className="text-right">
                      <span className="text-muted">15%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-safari text-muted" />
                    </td>
                    <td>Apple Safari</td>
                    <td className="text-right">
                      <span className="text-muted">7%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-internet-explorer text-muted" />
                    </td>
                    <td>Internet Explorer</td>
                    <td className="text-right">
                      <span className="text-muted">9%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-opera text-muted" />
                    </td>
                    <td>Opera mini</td>
                    <td className="text-right">
                      <span className="text-muted">23%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-edge text-muted" />
                    </td>
                    <td>Microsoft edge</td>
                    <td className="text-right">
                      <span className="text-muted">9%</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Projects</h2>
                </div>
                <table className="table card-table">
                  <tr>
                    <td>Admin Template</td>
                    <td className="text-right">
                      <span className="badge badge-default">65%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Landing Page</td>
                    <td className="text-right">
                      <span className="badge badge-success">Finished</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Backend UI</td>
                    <td className="text-right">
                      <span className="badge badge-danger">Rejected</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Personal Blog</td>
                    <td className="text-right">
                      <span className="badge badge-default">40%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>E-mail Templates</td>
                    <td className="text-right">
                      <span className="badge badge-default">13%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Corporate Website</td>
                    <td className="text-right">
                      <span className="badge badge-warning">Pending</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Members</h3>
                </div>
                <div className="card-body o-auto" style="height: 15rem">
                  <ul className="list-unstyled list-separated">
                    <li className="list-separated-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar avatar-md d-block"
                            style="background-image: url(demo/faces/female/12.jpg)"
                          />
                        </div>
                        <div className="col">
                          <div>
                            <a
                              href='#'
                              className="text-inherit"
                            >
                              Amanda Hunt
                            </a>
                          </div>
                          <small className="d-block item-except text-sm text-muted h-1x">
                            amanda_hunt@example.com
                          </small>
                        </div>
                        <div className="col-auto">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-separated-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar avatar-md d-block"
                            style="background-image: url(demo/faces/female/21.jpg)"
                          />
                        </div>
                        <div className="col">
                          <div>
                            <a
                              href='#'
                              className="text-inherit"
                            >
                              Laura Weaver
                            </a>
                          </div>
                          <small className="d-block item-except text-sm text-muted h-1x">
                            lauraweaver@example.com
                          </small>
                        </div>
                        <div className="col-auto">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-separated-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar avatar-md d-block"
                            style="background-image: url(demo/faces/female/29.jpg)"
                          />
                        </div>
                        <div className="col">
                          <div>
                            <a
                              href='#'
                              className="text-inherit"
                            >
                              Margaret Berry
                            </a>
                          </div>
                          <small className="d-block item-except text-sm text-muted h-1x">
                            margaret88@example.com
                          </small>
                        </div>
                        <div className="col-auto">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-separated-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar avatar-md d-block"
                            style="background-image: url(demo/faces/female/2.jpg)"
                          />
                        </div>
                        <div className="col">
                          <div>
                            <a
                              href='#'
                              className="text-inherit"
                            >
                              Nancy Herrera
                            </a>
                          </div>
                          <small className="d-block item-except text-sm text-muted h-1x">
                            nancy_83@example.com
                          </small>
                        </div>
                        <div className="col-auto">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-separated-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar avatar-md d-block"
                            style="background-image: url(demo/faces/male/34.jpg)"
                          />
                        </div>
                        <div className="col">
                          <div>
                            <a
                              href='#'
                              className="text-inherit"
                            >
                              Edward Larson
                            </a>
                          </div>
                          <small className="d-block item-except text-sm text-muted h-1x">
                            edward90@example.com
                          </small>
                        </div>
                        <div className="col-auto">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-separated-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span
                            className="avatar avatar-md d-block"
                            style="background-image: url(demo/faces/female/11.jpg)"
                          />
                        </div>
                        <div className="col">
                          <div>
                            <a
                              href='#'
                              className="text-inherit"
                            >
                              Joan Hanson
                            </a>
                          </div>
                          <small className="d-block item-except text-sm text-muted h-1x">
                            joan.hanson@example.com
                          </small>
                        </div>
                        <div className="col-auto">
                          <div className="item-action dropdown">
                            <a
                              href='#'
                              data-toggle="dropdown"
                              className="icon"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-tag" /> Action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-edit-2" />{" "}
                                Another action{" "}
                              </a>
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-message-square" />{" "}
                                Something else here
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                href='#'
                                className="dropdown-item"
                              >
                                <i className="dropdown-icon fe fe-link" />{" "}
                                Separated link
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-value float-right text-blue">
                        +5%
                      </div>
                      <h3 className="mb-1">423</h3>
                      <div className="text-muted">Users online</div>
                    </div>
                    <div className="card-chart-bg">
                      <div id="chart-bg-users-1" style="height: 100%" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-value float-right text-red">-3%</div>
                      <h3 className="mb-1">423</h3>
                      <div className="text-muted">Users online</div>
                    </div>
                    <div className="card-chart-bg">
                      <div id="chart-bg-users-2" style="height: 100%" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-value float-right text-green">
                        -3%
                      </div>
                      <h3 className="mb-1">423</h3>
                      <div className="text-muted">Users online</div>
                    </div>
                    <div className="card-chart-bg">
                      <div id="chart-bg-users-3" style="height: 100%" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-value float-right text-yellow">
                        9%
                      </div>
                      <h3 className="mb-1">423</h3>
                      <div className="text-muted">Users online</div>
                    </div>
                    <div className="card-chart-bg">
                      <div id="chart-bg-users-4" style="height: 100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Invoices</h3>
                </div>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        <th className="w-1">No.</th>
                        <th>Invoice Subject</th>
                        <th>Client</th>
                        <th>VAT No.</th>
                        <th>Created</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="text-muted">001401</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-inherit">
                            Design Works
                          </a>
                        </td>
                        <td>Carlson Limited</td>
                        <td>87956621</td>
                        <td>15 Dec 2017</td>
                        <td>
                          <span className="status-icon bg-success" /> Paid
                        </td>
                        <td>$887</td>
                        <td className="text-right">
                          <a
                            href='#'
                            className="btn btn-secondary btn-sm"
                          >
                            Manage
                          </a>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Actions
                            </button>
                          </div>
                        </td>
                        <td>
                          <a className="icon" href='#'>
                            <i className="fe fe-edit" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-muted">001402</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-inherit">
                            UX Wireframes
                          </a>
                        </td>
                        <td>Adobe</td>
                        <td>87956421</td>
                        <td>12 Apr 2017</td>
                        <td>
                          <span className="status-icon bg-warning" /> Pending
                        </td>
                        <td>$1200</td>
                        <td className="text-right">
                          <a
                            href='#'
                            className="btn btn-secondary btn-sm"
                          >
                            Manage
                          </a>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Actions
                            </button>
                          </div>
                        </td>
                        <td>
                          <a className="icon" href='#'>
                            <i className="fe fe-edit" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-muted">001403</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-inherit">
                            New Dashboard
                          </a>
                        </td>
                        <td>Bluewolf</td>
                        <td>87952621</td>
                        <td>23 Oct 2017</td>
                        <td>
                          <span className="status-icon bg-warning" /> Pending
                        </td>
                        <td>$534</td>
                        <td className="text-right">
                          <a
                            href='#'
                            className="btn btn-secondary btn-sm"
                          >
                            Manage
                          </a>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Actions
                            </button>
                          </div>
                        </td>
                        <td>
                          <a className="icon" href='#'>
                            <i className="fe fe-edit" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-muted">001404</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-inherit">
                            Landing Page
                          </a>
                        </td>
                        <td>Salesforce</td>
                        <td>87953421</td>
                        <td>2 Sep 2017</td>
                        <td>
                          <span className="status-icon bg-secondary" /> Due in 2
                          Weeks
                        </td>
                        <td>$1500</td>
                        <td className="text-right">
                          <a
                            href='#'
                            className="btn btn-secondary btn-sm"
                          >
                            Manage
                          </a>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Actions
                            </button>
                          </div>
                        </td>
                        <td>
                          <a className="icon" href='#'>
                            <i className="fe fe-edit" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-muted">001405</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-inherit">
                            Marketing Templates
                          </a>
                        </td>
                        <td>Printic</td>
                        <td>87956621</td>
                        <td>29 Jan 2018</td>
                        <td>
                          <span className="status-icon bg-danger" /> Paid Today
                        </td>
                        <td>$648</td>
                        <td className="text-right">
                          <a
                            href='#'
                            className="btn btn-secondary btn-sm"
                          >
                            Manage
                          </a>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Actions
                            </button>
                          </div>
                        </td>
                        <td>
                          <a className="icon" href='#'>
                            <i className="fe fe-edit" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-muted">001406</span>
                        </td>
                        <td>
                          <a href="invoice.html" className="text-inherit">
                            Sales Presentation
                          </a>
                        </td>
                        <td>Tabdaq</td>
                        <td>87956621</td>
                        <td>4 Feb 2018</td>
                        <td>
                          <span className="status-icon bg-secondary" /> Due in 3
                          Weeks
                        </td>
                        <td>$300</td>
                        <td className="text-right">
                          <a
                            href='#'
                            className="btn btn-secondary btn-sm"
                          >
                            Manage
                          </a>
                          <div className="dropdown">
                            <button
                              className="btn btn-secondary btn-sm dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              Actions
                            </button>
                          </div>
                        </td>
                        <td>
                          <a className="icon" href='#'>
                            <i className="fe fe-edit" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
