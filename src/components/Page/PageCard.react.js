// @flow

import * as React from "react";

import { Grid, Card, Container } from "../";

type Props = {|
  +children?: React.Node,
  +title?: string,
  +header?: React.Node,
  +footer?: React.Node,
  +RootComponent?: React.ElementType,
|};

function PageCard({
  children,
  title,
  header,
  footer,
  RootComponent,
}: Props): React.Node {
  return (
    <div className="my-3 my-md-5">
      <Container>
        <Grid.Row>
          <Grid.Col width={12}>
            <Card RootComponent={RootComponent}>
              {title && (
                <Card.Header>
                  <Card.Title>{title}</Card.Title>
                </Card.Header>
              )}
              {header}
              <Card.Body>{children}</Card.Body>
              {footer}
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  );
}

PageCard.displayName = "Page.Card";

export default PageCard;
