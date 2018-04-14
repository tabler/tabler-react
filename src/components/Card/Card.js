// @flow
import * as React from "react";

import cn from "classnames";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +title?: string,
  +body?: React.Node,
  +as: React.ElementType
|};

const Card = ({
  className,
  as: Component,
  title,
  body,
  ...props
}: Props): React.Node => {
  const classes = cn("card", className);
  const card_header =
    title === "" ? null : (
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    );
  const card_body = body === null ? null : <CardBody>{body}</CardBody>;

  if (card_header !== null || card_body !== null) {
    return (
      <Component className={classes} {...props}>
        {card_header}
        {card_body}
      </Component>
    );
  } else {
    return <Component className={classes} {...props} />;
  }
};

Card.defaultProps = {
  title: "",
  as: "div"
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;

export default Card;
