// @flow
import * as React from "react";
import cn from "classnames";
import { Card, Media, Grid, Header } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +map?: React.Node,
  +mapPlaceholder?: string,
  +rounded?: boolean,
  +avatar?: boolean,
  +objectURL?: string,
  +alt?: string,
  +name?: string,
  +address?: {| +line1?: string, +line2?: string |},
  +details?: Array<{| +title: string, +content?: React.Node |}>,
  +description?: string | {| +title: string, +content?: string |},
|};

function ContactCard({
  children,
  className,
  title,
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
    <Card className={cardClassName} title={title}>
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
            <Header.H6>{description.title || "Description"}</Header.H6>
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
