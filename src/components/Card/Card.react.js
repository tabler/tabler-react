// @flow
import * as React from "react";

import cn from "classnames";
import CardHeader from "./CardHeader.react";
import CardTitle from "./CardTitle.react";
import CardBody from "./CardBody.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +body?: React.Node,
  +RootComponent?: React.ElementType
|};

function Card({
  className,
  children,
  RootComponent,
  title,
  body
}: Props): React.Node {
  const classes = cn("card", className);
  const Component = RootComponent || "div";
  const card_header = title && (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
  );

  const card_body = body && <CardBody>{body}</CardBody>;

  if (card_header !== null || card_body !== null) {
    return (
      <Component className={classes}>
        {card_header}
        {card_body}
      </Component>
    );
  } else {
    return <Component className={classes}>{children}</Component>;
  }
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;

export default Card;
