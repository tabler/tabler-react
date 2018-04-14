// @flow

import * as React from "react";

import { Grid, Card, Container } from "../";

type Props = {|
  +children?: React.Node,
  +title?: string,
  +header?: React.Node,
  +footer?: React.Node,
  +as: React.ElementType
|};

const PageCard = ({
  children,
  title,
  header,
  footer,
  as,
  ...rest
}: Props): React.Node => (
  <div className="my-3 my-md-5">
    <Container>
      <Grid.Row>
        <Grid.Col width={12}>
          <Card as={as}>
            {title && (
              <Card.Header>
                <Card.Title>{title}</Card.Title>
              </Card.Header>
            )}
            {header && header}
            <Card.Body>{children}</Card.Body>
            {footer && footer}
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Container>
  </div>
);

export default PageCard;
