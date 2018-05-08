// @flow
import * as React from "react";

import {
  Header,
  Card,
  TabbedCard,
  Tab,
  Tabs,
  Button,
  Grid,
  Dimmer,
  Timeline,
  Stamp,
} from "tabler-react";

import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsCardsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Cards</Header.H2>

      <Header.H3>Default Card</Header.H3>
      <ComponentDemo>
        <Card
          title="Card title"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          deleniti fugit incidunt, iste, itaque minima neque pariatur
          perferendis sed suscipit velit vitae voluptatem. A consequuntur,
          deserunt eaque error nulla temporibus!"
        />
      </ComponentDemo>

      <Header.H3>Advanced Card</Header.H3>
      <ComponentDemo>
        <Card>
          <Card.Header>
            <Card.Title>Card title</Card.Title>
            <Card.Options>
              <Button color="primary" size="sm">
                Action 1
              </Button>
              <Button color="secondary" size="sm" className="ml-2">
                Action 2
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            deleniti fugit incidunt, iste, itaque minima neque pariatur
            perferendis sed suscipit velit vitae voluptatem. A consequuntur,
            deserunt eaque error nulla temporibus!
          </Card.Body>
          <Card.Footer>This is standard card footer</Card.Footer>
        </Card>
      </ComponentDemo>

      <Header.H3>Tabbed Card</Header.H3>
      <ComponentDemo>
        <TabbedCard initialTab="Hello">
          <Tab title="Hello">Hello World</Tab>
          <Tab title="Goodbye">Goodbye</Tab>
          <Tab title="Complex">
            <Grid.Row cards deck>
              <Grid.Col md={4}>
                <Card body="Short content" />
              </Grid.Col>
              <Grid.Col md={4}>
                <Card
                  body="Extra long content of card. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr"
                />
              </Grid.Col>
              <Grid.Col md={4}>
                <Card body="Short content" />
              </Grid.Col>
            </Grid.Row>
          </Tab>
        </TabbedCard>
      </ComponentDemo>

      <Header.H3>Tabs Component Alone</Header.H3>
      <ComponentDemo>
        <Tabs initialTab="Hello">
          <Tab title="Hello">Hello World</Tab>
          <Tab title="Goodbye">Goodbye</Tab>
          <Tab title="Complex">
            <Grid.Row cards deck>
              <Grid.Col md={4}>
                <Card body="Short content" />
              </Grid.Col>
              <Grid.Col md={4}>
                <Card
                  body="Extra long content of card. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr"
                />
              </Grid.Col>
              <Grid.Col md={4}>
                <Card body="Short content" />
              </Grid.Col>
            </Grid.Row>
          </Tab>
        </Tabs>
      </ComponentDemo>

      <Header.H3>Row Deck</Header.H3>
      <p>
        If you want to create a couple of posts next to each other, add the
        'deck' prop and they will all have the same height.
      </p>
      <ComponentDemo>
        <Grid.Row cards deck>
          <Grid.Col md={4}>
            <Card body="Short content" />
          </Grid.Col>
          <Grid.Col md={4}>
            <Card
              body="Extra long content of card. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <Card body="Short content" />
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Card Variations</Header.H3>
      <ComponentDemo>
        <Grid.Row cards deck>
          <Grid.Col md={6}>
            <Card
              statusColor="purple"
              title="Card status"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur
              perferendis sed suscipit velit vitae voluptatem. A consequuntur,
              deserunt eaque error nulla temporibus!"
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <Card>
              <Card.Status color="blue" side />
              <Card.Header>
                <Card.Title>Card status left side</Card.Title>
              </Card.Header>
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam deleniti fugit incidunt, iste, itaque minima neque
                pariatur perferendis sed suscipit velit vitae voluptatem. A
                consequuntur, deserunt eaque error nulla temporibus!
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Card with loader</Header.H3>
      <ComponentDemo>
        <Card title="Card with loader" isClosable isCollapsible>
          <Card.Body>
            <Dimmer active loader>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              deleniti fugit incidunt, iste, itaque minima neque pariatur
              perferendis sed suscipit velit vitae voluptatem. A consequuntur,
              deserunt eaque error nulla temporibus!
            </Dimmer>
          </Card.Body>
        </Card>
      </ComponentDemo>

      <Header.H3>Card with timeline</Header.H3>
      <ComponentDemo>
        <Card
          title="Card with timeline"
          options={<Stamp color="red">L2</Stamp>}
        >
          <Card.Body>
            <Timeline>
              <Timeline.Item
                title="Rondo Daszyńskiego"
                badgeColor="red"
                time="2 min. ago"
              />
              <Timeline.Item title="Rondo ONZ" badge time="1 min. ago" />
              <Timeline.Item
                title="Świętokrzyska"
                badgeColor="blue"
                time="now"
                active
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
              <Timeline.Item title="Stadion Narodowy" badge time="5 min." />
              <Timeline.Item
                title="Dworzec Wileński"
                badgeColor="green"
                time="7 min."
              />
            </Timeline>
          </Card.Body>
        </Card>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsCardsPage;
