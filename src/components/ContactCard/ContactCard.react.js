// @flow
import * as React from "react";
import cn from "classnames";
import { Card, Media, Grid, Header } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  /**
   * The Card title
   */
  +cardTitle?: string,
  /**
   * Render a map at the top of the Card
   */
  +map?: React.Node,
  /**
   * Render a map placeholder at the top of the Card
   */
  +mapPlaceholder?: string,
  /**
   * Add rounded corners to the Media.Object rendered by objectURL
   */
  +rounded?: boolean,
  /**
   * Display an Avatar in place of the Media.Object rendered by objectURL
   */
  +avatar?: boolean,
  /**
   * The URL of a contact image to displayed alongside thier name
   */
  +objectURL?: string,
  /**
   * The alt value for the objectURL image
   */
  +alt?: string,
  /**
   * The contacts name
   */
  +name?: string,
  /**
   * The contacts address
   */
  +address?: {| +line1?: string, +line2?: string |},
  /**
   * An array of contacts details displayed in a 2 column Grid
   */
  +details?: Array<{| +title: string, +content?: React.Node |}>,
  /**
   * An additional block of text below the details
   */
  +description?: string | {| +title: string, +content?: string |},
|};

/**
 * Renders a Card designed for displaying details of a person or business
 */
function ContactCard({
  children,
  className,
  cardTitle,
  map,
  mapPlaceholder,
  rounded,
  avatar,
  objectURL,
  alt,
  name,
  address,
  details,
  description,
}: Props) {
  const cardClassName = cn(className);
  return (
    <Card className={cardClassName} title={cardTitle}>
      {(mapPlaceholder || map) && (
        <Card.Map placeholder={mapPlaceholder}>{map}</Card.Map>
      )}
      <Card.Body>
        <Media className="mb-5">
          <Media.Object
            size="md"
            className="mr-4"
            avatar={avatar}
            rounded={rounded}
            objectURL={objectURL}
            alt={alt}
          />

          <Media.Body>
            {name && <Header.H5>{name}</Header.H5>}
            {address && (
              <address class="text-muted small">
                {address.line1}
                {address.line2 && <br />}
                {address.line2}
              </address>
            )}
          </Media.Body>
        </Media>
        {details && (
          <Grid.Row>
            {details.map((d, i) => (
              <Grid.Col width={6} key={i}>
                <Header.H6>{d.title}</Header.H6>
                <p>{d.content}</p>
              </Grid.Col>
            ))}
          </Grid.Row>
        )}
        {description && (
          <React.Fragment>
            <Header.H6>
              {typeof description === "string"
                ? "Description"
                : description.title}
            </Header.H6>
            <p>
              {typeof description === "string"
                ? description
                : description.content}
            </p>
          </React.Fragment>
        )}
        {children}
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
