// @flow
import * as React from "react";

import cn from "classnames";
import CardHeader from "./CardHeader.react";
import CardTitle from "./CardTitle.react";
import CardBody from "./CardBody.react";
import CardOptions from "./CardOptions.react";
import CardOptionsItem from "./CardOptionsItem.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +body?: React.Node,
  +RootComponent?: React.ElementType,
  +options?: React.Node,
  +collapse?: boolean,
  +close?: boolean,
|};

function Card({
  className,
  children,
  RootComponent,
  title,
  body,
  options,
  collapse,
  close,
}: Props): React.Node {
  const classes = cn("card", className);
  const Component = RootComponent || "div";

  const card_options = (options || collapse || close) && (
    <Card.Options>
      {collapse && <Card.OptionsItem type="collapse" />}
      {close && <Card.OptionsItem type="close" />}
      {options}
    </Card.Options>
  );

  const card_header = title && (
    <Card.Header>
      <Card.Title>{title}</Card.Title>
      {card_options}
    </Card.Header>
  );

  const card_body = body && <Card.Body>{body}</Card.Body>;

  if (card_header !== null || card_body !== null) {
    return (
      <Component className={classes}>
        {card_header}
        {card_body || children}
      </Component>
    );
  } else {
    return <Component className={classes}>{children}</Component>;
  }
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Options = CardOptions;
Card.OptionsItem = CardOptionsItem;

export default Card;
