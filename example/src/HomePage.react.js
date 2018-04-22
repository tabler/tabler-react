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

import SiteWrapper from "./SiteWrapper.react";

function Home() {
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
                    <div className="display-4 font-weight-bold mb-4">$652</div>
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
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
