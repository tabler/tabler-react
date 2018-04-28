// @flow

import * as React from "react";
import cn from "classnames";

import { Card, Header, Button, Icon } from "../../components";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +name: string,
  +description?: string,
  +avatarURL?: string,
  +twitterURL?: string,
  +backgroundURL?: string,
|};

function CardProfile({
  className,
  children,
  name,
  description = "",
  avatarURL = "",
  twitterURL = "",
  backgroundURL = "",
}: Props): React.Node {
  const classes = cn("card card-profile", className);
  return (
    <div className={classes}>
      <Card.Header backgroundURL={backgroundURL} />
      <Card.Body className="text-center">
        <Card.ProfileImage avatarURL={avatarURL} />
        <Header.H3 className="mb-3">{name}</Header.H3>
        <p className="mb-4">{description}</p>
        <Button outline color="primary" size="sm">
          <Icon name="twitter" prefix="fa" /> Follow
        </Button>
        {children}
      </Card.Body>
    </div>
  );
}

export default CardProfile;
